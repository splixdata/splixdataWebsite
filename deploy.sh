#!/bin/bash

# Google Cloud Run Deployment Script for SplixData Site
# Project ID: kairex-476321
# Region: us-central1

set -e

PROJECT_ID="kairex-476321"
SERVICE_NAME="splixdata-site"
REGION="us-central1"
IMAGE_NAME="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"

echo "🚀 Starting deployment to Google Cloud Run..."
echo "Project: ${PROJECT_ID}"
echo "Service: ${SERVICE_NAME}"
echo "Region: ${REGION}"
echo ""

# Authenticate with Google Cloud
echo "📝 Setting up Google Cloud project..."
gcloud config set project ${PROJECT_ID}

# Enable required APIs
echo "🔧 Enabling required Google Cloud APIs..."
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com

# Build the Docker image using Google Cloud Build
echo "🏗️  Building Docker image with Cloud Build (region: ${REGION})..."
gcloud builds submit \
  --tag ${IMAGE_NAME} \
  --region ${REGION}

# Deploy to Cloud Run
echo "🚢 Deploying to Cloud Run..."
gcloud run deploy ${SERVICE_NAME} \
  --image ${IMAGE_NAME} \
  --platform managed \
  --region ${REGION} \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your website should now be live at:"
gcloud run services describe ${SERVICE_NAME} --region ${REGION} --format='value(status.url)'
