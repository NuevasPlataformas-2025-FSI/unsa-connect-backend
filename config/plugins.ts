export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-upload-supabase-provider',
      providerOptions: {
        supabaseUrl: env('SUPABASE_URL'),
        supabaseKey: env('SUPABASE_SERVICE_ROLE_KEY'),
        supabaseBucket: env('SUPABASE_BUCKET', 'uploads'),
        supabaseRegion: env('SUPABASE_REGION', 'us-east-1'),
      },
    },
  },
});
