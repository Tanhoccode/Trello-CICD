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

# Install PM2 and serve globally
sudo npm install -g pm2 serve

# Create application directory
sudo mkdir -p /var/www/trello
sudo chown $USER:$USER /var/www/trello

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

# Setup PM2 startup
pm2 startup
echo "Run the command above if prompted!"

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
echo "4. Run 'pm2 startup' command if prompted" 