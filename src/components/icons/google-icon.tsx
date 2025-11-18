import * as React from 'react';

export function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Google</title>
      <path
        fill="#4285F4"
        d="M21.35 11.1h-9.35v2.8h5.6c-.3 1.8-1.5 3.3-3.3 3.3-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6c.8 0 1.5.3 2.1.8l2.1-2.1c-1.3-1.2-3.1-2-5.2-2-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6c4.5 0 7.2-3.2 7.2-7.3 0-.6-.1-1.1-.2-1.6z"
      />
    </svg>
  );
}
