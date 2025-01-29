
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: "nv4dnb82", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: "skl3yQWoZ6HIeI3Rfpp6KK3Gx5SVpqG4muBmBO8Nuv7Tr2rGSfSlzHUQFkIUOLIr6oOHDIZXNe6ZXPTNrONAJvFr9c7rMG2GTQr0RQcF0fBl9mLgXvk6mgPy4JTqM8PxqCbC86Cj5ChERSAm7Gwn5dnpIDSobw2AwYNeBRl1exqcUm6BCyE0",
});
