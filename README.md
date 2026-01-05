# 🏥 HealthChain - Blockchain Health Insurance DApp

A decentralized health insurance platform built on Ethereum blockchain with smart contracts for automated policy and claims management.

![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white)
![Solidity](https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 Features

- **Smart Contract-Based Policies** - Create and manage insurance policies on-chain
- **Automated Claims Processing** - Submit, approve, and pay claims instantly
- **MetaMask Integration** - Secure wallet connection and transaction signing
- **Admin Dashboard** - Complete control for insurance administrators
- **Transparent Operations** - All transactions visible on blockchain
- **Premium UI/UX** - Modern, responsive glassmorphism design

## 🏗️ Project Structure

```
Blockchain project/
├── contracts/
│   └── HealthInsurance.sol    # Smart contract
├── scripts/
│   └── deploy.js              # Deployment script
├── frontend/
│   ├── index.html             # Main HTML file
│   ├── css/
│   │   └── style.css          # Styles
│   └── js/
│       ├── app.js             # Main application
│       ├── config.js          # Auto-generated config
│       └── abi.js             # Contract ABI
├── hardhat.config.js          # Hardhat configuration
└── package.json               # Dependencies
```

## 🚀 Quick Start

### Prerequisites

1. **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
2. **Ganache** - [Download](https://trufflesuite.com/ganache/)
3. **MetaMask** - [Install Extension](https://metamask.io/)

### Step 1: Install Dependencies

```bash
cd "Blockchain project"
npm install
```

### Step 2: Start Ganache

1. Open Ganache
2. Click "Quickstart" or create a new workspace
3. Ensure it runs on `http://127.0.0.1:7545` with Chain ID `1337`

### Step 3: Deploy Smart Contract

```bash
npm run deploy
```

This will:
- Compile the smart contract
- Deploy to Ganache
- Fund the contract with 10 ETH
- Generate frontend configuration files

### Step 4: Configure MetaMask

1. Open MetaMask
2. Add Network:
   - **Network Name**: Ganache Local
   - **RPC URL**: http://127.0.0.1:7545
   - **Chain ID**: 1337
   - **Currency Symbol**: ETH

3. Import Account:
   - Copy a private key from Ganache
   - MetaMask → Import Account → Paste key

### Step 5: Open the DApp

Open `frontend/index.html` in your browser and connect MetaMask!

## 📋 Insurance Plans

| Plan | Premium | Coverage |
|------|---------|----------|
| Basic | 0.01 ETH/year | 1 ETH |
| Standard | 0.05 ETH/year | 5 ETH |
| Premium | 0.1 ETH/year | 10 ETH |
| Enterprise | 0.5 ETH/year | 50 ETH |

## 👥 User Roles

### Policy Holder (User)
- Create insurance policies
- Submit claims
- Track claim status
- Renew policies

### Insurer (Admin)
- The first Ganache account (deployer)
- View all pending claims
- Approve or reject claims
- Pay approved claims
- Deposit/withdraw contract funds

## 🔧 Smart Contract Functions

### Policy Management
- `createPolicy(name, type)` - Create new policy
- `cancelPolicy(policyId)` - Cancel active policy
- `renewPolicy(policyId)` - Renew existing policy

### Claims Management
- `submitClaim(policyId, amount, description, provider)` - File claim
- `approveClaim(claimId)` - Admin approves claim
- `rejectClaim(claimId, reason)` - Admin rejects claim
- `payClaim(claimId)` - Admin pays approved claim

## 🛠️ Development Commands

```bash
# Compile contracts
npm run compile

# Deploy to Ganache
npm run deploy

# Run tests
npm test

# Start local Hardhat node
npm run node

# Clean artifacts
npm run clean
```

## 📝 License

MIT License - feel free to use for learning and development!

## 🤝 Support

For issues or questions, create an issue in the repository.

---

Built with ❤️ using Ethereum, Solidity, and JavaScript
