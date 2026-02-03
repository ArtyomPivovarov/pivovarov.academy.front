#!/bin/bash
# Start development server with mock mode enabled

export NUXT_PUBLIC_MOCK_MODE=true
export API_URL=http://localhost:4200/api

echo "🚀 Starting dev server with mock mode..."
echo "📧 Auto-login: demo@pivovarov.academy"
echo ""

pnpm dev
