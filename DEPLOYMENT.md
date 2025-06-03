# 🚀 CI/CD Deployment Guide

## Overview
This project uses GitHub Actions for CI/CD to automatically deploy the Trello Clone application to AWS EC2.

## 📋 Prerequisites

### AWS EC2 Instance
- **IP**: `13.212.128.157`
- **OS**: Ubuntu 20.04 LTS or later
- **Instance Type**: t2.micro or larger
- **Security Group**: Allow ports 22 (SSH), 80 (HTTP), 443 (HTTPS)

### GitHub Repository
- Repository: https://github.com/Tanhoccode/Trello-CICD.git
- GitHub Actions enabled

## 🔧 Setup Instructions

### Step 1: Prepare EC2 Instance

1. **SSH to your EC2 instance:**
```bash
ssh -i your-key.pem ubuntu@13.212.128.157
```

2. **Run the setup script:**
```bash
# Make script executable
chmod +x scripts/ec2-setup.sh

# Run setup
./scripts/ec2-setup.sh
```

### Step 2: Configure GitHub Secrets

Navigate to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

| Secret Name | Value | Description |
|------------|-------|-------------|
| `EC2_HOST` | `13.212.128.157` | Your EC2 public IP |
| `EC2_USERNAME` | `ubuntu` | EC2 username (usually ubuntu for Ubuntu AMI) |
| `EC2_SSH_KEY` | `-----BEGIN RSA PRIVATE KEY-----...` | Your EC2 private key content |

### Step 3: Generate SSH Key Pair (if needed)

```bash
# On your local machine
ssh-keygen -t rsa -b 4096 -f ~/.ssh/trello-deploy

# Copy public key to EC2
ssh-copy-id -i ~/.ssh/trello-deploy.pub ubuntu@13.212.128.157

# Use private key content for EC2_SSH_KEY secret
cat ~/.ssh/trello-deploy
```

## 🚀 Deployment Process

### Automatic Deployment
The deployment triggers automatically on:
- Push to `main` or `master` branch
- Pull request to `main` or `master` branch

### Manual Deployment
1. Go to GitHub Actions tab
2. Select "Deploy to AWS EC2" workflow
3. Click "Run workflow"

## 📊 Deployment Pipeline

```mermaid
graph LR
    A[Code Push] --> B[GitHub Actions]
    B --> C[Install Dependencies]
    C --> D[Run Lint]
    D --> E[Build Application]
    E --> F[Deploy to EC2]
    F --> G[Start Application]
    G --> H[Health Check]
```

### Pipeline Steps:
1. **Checkout code** - Download source code
2. **Setup Node.js** - Install Node.js 18.16.0
3. **Install dependencies** - Run `npm ci`
4. **Run lint** - Code quality check
5. **Build application** - Create production build
6. **Deploy to EC2** - Copy files via SCP
7. **Start application** - Restart services

## 🔍 Monitoring & Troubleshooting

### Check Application Status
```bash
# SSH to EC2
ssh ubuntu@13.212.128.157

# Check PM2 processes
pm2 list

# Check application logs
pm2 logs trello-app

# Check system service
sudo systemctl status trello-app

# Check Nginx
sudo systemctl status nginx
```

### Common Issues

#### 1. Permission Denied
```bash
# Fix permissions
sudo chown -R ubuntu:ubuntu /var/www/trello
```

#### 2. Port Already in Use
```bash
# Kill process on port 3000
sudo lsof -ti:3000 | xargs sudo kill -9
```

#### 3. Nginx Issues
```bash
# Test Nginx config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

## 🌐 Access Your Application

After successful deployment:
- **URL**: http://13.212.128.157
- **Local Development**: http://localhost:5173

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── scripts/
│   └── ec2-setup.sh           # EC2 setup script
├── src/                       # Application source code
├── dist/                      # Build output (generated)
├── package.json              # Dependencies
└── DEPLOYMENT.md             # This file
```

## 🔒 Security Considerations

1. **SSH Keys**: Keep private keys secure
2. **Secrets**: Never commit secrets to repository
3. **Firewall**: Only open necessary ports
4. **Updates**: Keep EC2 instance updated
5. **SSL**: Consider adding HTTPS with Let's Encrypt

## 📝 Next Steps

1. **Custom Domain**: Point your domain to EC2 IP
2. **SSL Certificate**: Setup HTTPS with Let's Encrypt
3. **Monitoring**: Add application monitoring
4. **Backup**: Setup automated backups
5. **Scaling**: Consider load balancing for production

## 🆘 Support

If you encounter issues:
1. Check GitHub Actions logs
2. SSH to EC2 and check application logs
3. Verify all secrets are correctly set
4. Ensure EC2 security groups allow traffic

---
**Repository**: https://github.com/Tanhoccode/Trello-CICD.git  
**EC2 Instance**: 13.212.128.157 