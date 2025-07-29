import { NextResponse, NextRequest } from 'next/server';

const knownHeadless = /HeadlessChrome|PhantomJS|puppeteer/i; // Define known headless user agents
const knownBrowsers = /Chrome|Firefox|Safari|Edge|Opera/i; // Define known browser user agents

export function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    // Skip middleware for Next internals, API routes, and any file requests
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.includes('.')
    ) {
      return NextResponse.next();
    }

    const ua = req.headers.get('user-agent') || '';
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const url = req.nextUrl.pathname;
    const accept = req.headers.get('accept') || '';
    const acceptLang = req.headers.get('accept-language') || '';
  
    console.log('[DEBUG HEADERS]', { ua, accept, acceptLang });
  
    // Allow localhost/dev environments and common dev container setups
    if (
      process.env.NODE_ENV === 'development' ||
      ip === '::1' ||
      ip.startsWith('127.') ||
      ip.startsWith('192.168.') ||
      ip.startsWith('10.') ||
      ip.startsWith('172.') ||
      req.nextUrl.hostname === 'localhost' ||
      req.nextUrl.hostname === '127.0.0.1' ||
      req.nextUrl.hostname === '0.0.0.0' ||
      req.nextUrl.hostname.endsWith('.local') ||
      ua.toLowerCase().includes('headless') ||
      ua.includes('Macintosh')
    ) {
      return NextResponse.next();
    }
  
    const isBot = knownHeadless.test(ua) && !knownBrowsers.test(ua);
    const looksHuman =
      knownBrowsers.test(ua) &&
      (accept.includes('text/html') || accept.includes('*/*')) &&
      acceptLang.length > 0 &&
      ua.length > 20;
  
    if (!looksHuman || isBot) {
      console.warn(`[BLOCKED BOT] UA: ${ua} | IP: ${ip} | URL: ${url}`);
      return new NextResponse('Access Denied', { status: 403 });
    }
  
    return NextResponse.next();
  }