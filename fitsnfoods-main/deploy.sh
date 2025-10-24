# Quick Deployment Test Script

echo "Testing FitsnFoods deployment..."

# Check if we're in the right directory
echo "Current directory:"
pwd

echo "Files in current directory:"
ls -la

echo "Files in public directory:"
ls -la public/

echo "Files in views directory:"
ls -la views/

echo "Deploying to Vercel..."
vercel --prod --force

echo "Deployment complete! Check your Vercel dashboard for the URL."
