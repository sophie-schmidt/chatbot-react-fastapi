const nextConfig = {
  env: {
    // Make environment variables available to the browser
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1',
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`
            : "/api/",
      },
      {
        source: "/docs",
        destination:
          process.env.NODE_ENV === "development"
            ? `${process.env.NEXT_PUBLIC_API_URL}/api/docs`
            : "/api/py/docs",
      },
      {
        source: "/openapi.json",
        destination:
          process.env.NODE_ENV === "development"
            ? `${process.env.NEXT_PUBLIC_API_URL}/openapi.json`
            : "/openapi.json",
      },
    ];
  },
};

export default nextConfig;
