#!/bin/bash

# EC2 Setup Script for Trello CI/CD
# Run this script on your EC2 instance (13.212.128.157)

echo "🚀 Starting EC2 setup for Trello application..."

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt install nginx -y

# Install PM2 for process management
sudo npm install -g pm2

# Create application directory
sudo mkdir -p /var/www/trello
sudo chown $USER:$USER /var/www/trello

# Create PM2 ecosystem file
cat > /var/www/trello/ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'trello-app',
    script: 'npx',
    args: 'serve -s . -l 3000',
    cwd: '/var/www/trello',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Create Nginx configuration
sudo tee /etc/nginx/sites-available/trello << 'EOF'
server {
    listen 80;
    server_name 13.212.128.157;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable Nginx site
sudo ln -sf /etc/nginx/sites-available/trello /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test and restart Nginx
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# Create systemd service for the app
sudo tee /etc/systemd/system/trello-app.service << 'EOF'
[Unit]
Description=Trello Application
After=network.target

[Service]
Type=forking
User=ubuntu
WorkingDirectory=/var/www/trello
ExecStart=/usr/bin/pm2 start ecosystem.config.js --no-daemon
ExecReload=/usr/bin/pm2 reload ecosystem.config.js
ExecStop=/usr/bin/pm2 delete trello-app
Restart=always

[Install]
WantedBy=multi-user.target
EOF

# Reload systemd and enable service
sudo systemctl daemon-reload
sudo systemctl enable trello-app

# Install serve package globally for serving static files
sudo npm install -g serve

# Setup firewall
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable

echo "✅ EC2 setup completed!"
echo "📝 Next steps:"
echo "1. Add GitHub Secrets to your repository"
echo "2. Push code to trigger deployment"
echo "3. Access your app at: http://13.212.128.157" 