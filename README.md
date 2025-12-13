# Blockchain Crowdfunding Platform

A decentralized fundraising contract that enables communities to launch campaigns, collect ERC20 contributions, release funds only when goals are met, or refund contributors when campaigns fail.

## Contracts

- `Crowdfunding.sol` – core crowdfunding logic with goal, deadline, withdrawals, and refunds.
- `MockToken.sol` – simple ERC20 for local testing.

## Getting Started

1. Install dependencies (requires access to the npm registry):
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env
   # fill SEPOLIA_RPC_URL and PRIVATE_KEY
   ```
3. Run tests:
   ```bash
   npm test
   ```
4. Deploy to Sepolia:
   ```bash
   npm run deploy:sepolia
   ```

## Notes

- The crowdfunding contract uses OpenZeppelin security primitives and emits events for campaign creation, contributions, withdrawals, and refunds.
- Refunds are only available after the deadline when the funding goal is not met.
