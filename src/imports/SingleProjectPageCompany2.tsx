import image_656cc0fe8530f0d1761853665aa56e7052646439 from 'figma:asset/656cc0fe8530f0d1761853665aa56e7052646439.png';
import image_ca7986f51e9f6497e0eef568ec8c9856ff589df9 from 'figma:asset/ca7986f51e9f6497e0eef568ec8c9856ff589df9.png';
import image_8dcfed222f7e40b3588e7fd5dfb19134034f1d97 from 'figma:asset/8dcfed222f7e40b3588e7fd5dfb19134034f1d97.png';
import image_cf609b7de854c2b173e7ae7f96312fc1424da94b from 'figma:asset/cf609b7de854c2b173e7ae7f96312fc1424da94b.png';
import image_5ea49bf391e1e84c3830e038ce812bde68fdbec6 from 'figma:asset/5ea49bf391e1e84c3830e038ce812bde68fdbec6.png';
import image_cf609b7de854c2b173e7ae7f96312fc1424da94b from 'figma:asset/cf609b7de854c2b173e7ae7f96312fc1424da94b.png';
import image_cef94f46df1684b46133f5ddad2b1f6b277e98a8 from 'figma:asset/cef94f46df1684b46133f5ddad2b1f6b277e98a8.png';
import image_2e0f085fee61d2c0b0bedad5cdb74b7ae658ee8e from 'figma:asset/2e0f085fee61d2c0b0bedad5cdb74b7ae658ee8e.png';
import svgPaths from "./svg-2zj1s9rof8";
import imgRectangle64 from "figma:asset/4edee0522d963c19d3a2681a2a68e974bf7d073a.png";
import imgRectangle67 from "figma:asset/656cc0fe8530f0d1761853665aa56e7052646439.png";
import imgRectangle68 from "figma:asset/2b1db58736b4e8b665a00d34180df3643581f4a7.png";
import imgRectangle69 from "figma:asset/9632c89b38512600d607e3854c9c19c02a46bdbb.png";
import imgRectangle70 from "figma:asset/1d78d223f983949941f119a37f072b37ee8ace34.png";
import imgRectangle71 from "figma:asset/5714b14393ecc2abcb4e6a686635be8ffb1ea7ad.png";
import imgRectangle72 from "figma:asset/8dcfed222f7e40b3588e7fd5dfb19134034f1d97.png";
import imgRectangle73 from "figma:asset/ca7986f51e9f6497e0eef568ec8c9856ff589df9.png";
import imgRectangle63 from "figma:asset/3f26a6cc2c9a40b70dad1d7307ef04517410670a.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function Background() {
  return (
    <div className="absolute left-[754px] size-[808px] top-[459px]" data-name="Background">
      <div className="absolute inset-[-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1132 1132">
          <g id="Background">
            <g filter="url(#filter0_f_1_781)" id="Light Shadow">
              <circle cx="565.6" cy="565.6" fill="url(#paint0_radial_1_781)" fillOpacity="0.6" r="404" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1131.2" id="filter0_f_1_781" width="1131.2" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_781" stdDeviation="80.8" />
            </filter>
            <radialGradient cx="0" cy="0" gradientTransform="translate(517.12 488.84) rotate(51.2098) scale(505.18)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_781" r="1">
              <stop stopColor="#F2F2F2" />
              <stop offset="1" stopColor="#F2F2F2" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p1e128b00} fill="var(--fill-0, #0F103F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Home1() {
  return (
    <div className="absolute left-0 size-[44px] top-0" data-name="Home">
      <Home />
    </div>
  );
}

function PersonOutline() {
  return (
    <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="person_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="person_outline">
          <path d={svgPaths.p18946880} fill="var(--fill-0, #0F103F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function About() {
  return (
    <div className="absolute left-0 size-[44px] top-[124px]" data-name="About">
      <PersonOutline />
    </div>
  );
}

function Work() {
  return (
    <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="work">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="work">
          <path d={svgPaths.p1641fb80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="absolute left-0 size-[44px] top-[248px]" data-name="Portfolio">
      <Work />
    </div>
  );
}

function PhoneFill() {
  return (
    <div className="absolute left-[10px] size-[23px] top-[10px]" data-name="Phone_fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Phone_fill">
          <path d={svgPaths.p2dbe2d00} fill="var(--fill-0, #0F103F)" id="Vector 189" />
        </g>
      </svg>
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute left-[0.5px] size-[43px] top-[372px]" data-name="Contact">
      <PhoneFill />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute left-[10px] size-[24px] top-[10px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p89aed78} fill="var(--fill-0, #0F103F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute left-0 size-[44px] top-[495px]" data-name="Search">
      <Search />
    </div>
  );
}

function MenuIcons() {
  return (
    <div className="absolute h-[539px] left-[18px] top-[81px] w-[44px]" data-name="Menu icons">
      <Home1 />
      <About />
      <Portfolio />
      <Contact />
      <Search1 />
    </div>
  );
}

function SideMenu() {
  return (
    <div className="absolute backdrop-blur-[10.054px] backdrop-filter bg-[rgba(255,255,255,0.4)] h-[700px] left-0 rounded-br-[50px] rounded-tr-[50px] top-[163px] w-[80px]" data-name="Side menu">
      <div className="h-[700px] overflow-clip relative rounded-[inherit] w-[80px]">
        <div className="absolute h-[700px] left-0 top-0 w-[80px]" data-name="Background">
          <div className="absolute bottom-[-11.39%] left-[-49.84%] right-[-49.84%] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 780">
              <foreignObject height="799.855" width="159.747" x="0" y="-20.1079">
                <div style={{ backdropFilter: "blur(10.05px)", clipPath: "url(#bgblur_0_1_761_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <g data-figma-bg-blur-radius="20.1079" filter="url(#filter0_d_1_761)" id="Background">
                <path d={svgPaths.p1c198600} fill="var(--fill-0, white)" fillOpacity="0.4" />
                <path d={svgPaths.p56da180} stroke="url(#paint0_linear_1_761)" strokeWidth="1.32912" style={{ mixBlendMode: "overlay" }} />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="799.855" id="filter0_d_1_761" width="159.747" x="0" y="-20.1079">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="39.8736" />
                  <feGaussianBlur stdDeviation="19.9368" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.269263 0 0 0 0 0.166562 0 0 0 0 0.4875 0 0 0 0.15 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_761" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_761" mode="normal" result="shape" />
                </filter>
                <clipPath id="bgblur_0_1_761_clip_path" transform="translate(0 20.1079)">
                  <path d={svgPaths.p1c198600} />
                </clipPath>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_761" x1="39.8736" x2="197.811" y1="0" y2="18.05">
                  <stop stopColor="white" stopOpacity="0.6" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <MenuIcons />
      </div>
      <div aria-hidden="true" className="absolute border-[1.329px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-br-[50px] rounded-tr-[50px] shadow-[0px_39.874px_39.874px_0px_rgba(69,42,124,0.15)]" />
    </div>
  );
}

function Frame() {
  return <div className="absolute h-[31px] left-[849px] top-[368px] w-[359px]" />;
}

function Frame39() {
  return <div className="absolute h-[236px] left-[124px] top-[256px] w-[1235px]" />;
}

function HomePage() {
  return (
    <div className="absolute bg-[#f2f2f2] h-[925px] left-[48px] top-[-11px] w-[1440px]" data-name="Home page">
      <Background />
      <SideMenu />
      <Frame />
      <Frame39 />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[140px] not-italic text-[20.671px] text-black text-nowrap top-[483px] whitespace-pre">{`Time Line `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[492px] not-italic text-[20.671px] text-black text-nowrap top-[489px] whitespace-pre">{`Platform `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[871px] not-italic text-[20.671px] text-black text-nowrap top-[483px] whitespace-pre">{`Team  `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[1230px] not-italic text-[20.671px] text-black text-nowrap top-[483px] whitespace-pre">{`Year `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[894px] not-italic text-[20.671px] text-black text-nowrap top-[544px] whitespace-pre">1</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[140px] not-italic text-[20.671px] text-black text-nowrap top-[536px] whitespace-pre">{`2 weeks `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[492px] not-italic text-[20.671px] text-black text-nowrap top-[544px] whitespace-pre">{`(Figma:  Mobile) `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[1230px] not-italic text-[20.671px] text-black text-nowrap top-[544px] whitespace-pre">2025</p>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[134px] not-italic text-[20.671px] text-black top-[214px] w-[1286px]">
        <p className="font-['Poppins:Bold',sans-serif] mb-0">Local Lit Finder - Independent Bookstore Inventory</p>
        <p className="mb-0">&nbsp;</p>
        <p>The goal is to provide a unified inventory search for customers who prefer to buy books locally. The app must allow users to quickly check the real-time stock of multiple independent bookstores in their area simultaneously, bridging the gap between digital convenience and local commerce.</p>
      </div>
      <div className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[140px] not-italic text-[20.671px] text-black text-nowrap top-[654px] whitespace-pre">
        <p className="mb-0">My Role</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">Lead UX Designer</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• Conducted stakeholder interviews with Libraries and people living around the communities</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• Created information architecture and user flows</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• Designed accessible interfaces for diverse age groups</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• Conducted usability testing with target users</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• Led Research amd Design for mobile app</p>
      
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[23.479px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[42.689px] w-[285px]">Problem Statement</p>
      <p className="font-['Poppins:Regular',sans-serif] h-[329px] leading-[normal] relative shrink-0 text-[20.671px] w-[316px]">Customers who prefer supporting independent bookstores often struggle to know which local shop has a specific book in stock. Without a unified way to check real-time inventory across multiple stores, they waste time calling or visiting locations, leading to frustration and missed sales for small bookstores. There is a need for a simple, reliable mobile solution that centralizes local bookstore inventory, helping readers quickly find, reserve, and pick up books nearby.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[21.345px] h-[435.429px] items-start overflow-clip px-[21.345px] py-[27.748px] relative rounded-[21.345px] shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex font-['Poppins:Regular',sans-serif] gap-[23.479px] h-[784px] items-start leading-[0] not-italic relative shrink-0 text-[#0066ff] text-[20.671px] w-full">
      <div className="relative shrink-0 w-[401px]">
        <p className="leading-[normal] mb-0">Needs</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Users need a single, unified place to search inventory from multiple independent bookstores at once.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Users need real-time stock information to avoid visiting stores that don’t have the book.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Users need quick search speed and a frictionless way to check availability.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Users want the convenience of digital tools while still supporting local commerce.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Users need a simple pickup workflow e.g., “Hold for Pickup.”</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Users want location clarity, including maps to nearby bookstores that have the item.</span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal] text-black">Users need clear, legible book result cards with pricing, cover art, and stock status.</span>
          </li>
        </ul>
      </div>
      <div className="relative shrink-0 w-[363px]">
        <p className="leading-[normal] mb-0">Struggles</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Difficulty checking stock across multiple independent bookstores currently requires calling or visiting each store.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Frustration caused by outdated or inaccurate inventory information.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Lack of a centralized search tool, unlike big retailers (Amazon, major chains).</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Time wasted traveling to stores that don’t have the desired book in stock.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Limited awareness of which stores are nearby and what they carry.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Inefficient or unclear pickup/hold processes without a digital reservation option.</span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal] text-black">Users struggle to balance their desire to support local bookstores with the convenience gap of modern digital tools.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[23.479px] items-start relative shrink-0 w-[821px]">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[42.689px] text-black w-[328.706px]">{`User Needs & Struggles`}</p>
      <Frame32 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[21.345px] items-start overflow-clip px-[21.345px] py-[27.748px] relative rounded-[21.345px] shrink-0 w-[805px]">
      <Frame11 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex h-[911px] items-start justify-between relative shrink-0 w-[1164px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[23.479px] items-start leading-[0] not-italic relative shrink-0 text-black w-[868.723px]">
      <div className="font-['Poppins:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[42.689px] w-[328.706px]">
        <p className="mb-0">Proposed</p>
        <p>Solution</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[20.671px] w-[868.723px]">
        <p className="leading-[normal] mb-0">A unified mobile platform that aggregates real time inventory</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">Search for any book once and instantly see availability across multiple independent bookstores in your area.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">Each book result shows In Stock, Low Stock, or Out of Stock based on live store data.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">Clear, visual cards displaying the book cover, price, store availability, and pickup options.</span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal]">{`Reserve a book directly from the app so it's ready when you arrive at the store.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[21.345px] items-start overflow-clip px-[21.345px] py-[27.748px] relative rounded-[21.345px] shrink-0 w-[1163.28px]">
      <Frame12 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[42.689px] items-start relative shrink-0 w-[1163.28px]">
      <Frame31 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[21.345px] items-start px-[53.361px] py-[64.034px] relative w-full">
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[127.155px]">Empathy</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        <p className="mb-0">
          Understand local readers and bookstore customers. Identify their actions, frustrations, and motivations.
          <br aria-hidden="true" />
          {` From the brief, the target user is a 45-year-old avid local reader who prefers supporting local shops but depends on digital convenience.`}
        </p>
        <p className="mb-0">UI_UX Design Project_Publishing…</p>
        <p>{` Research includes understanding inventory pain points and the workflow for searching and picking up books.`}</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[12.975px] h-[266px] items-start overflow-clip px-[12.975px] py-[16.868px] relative rounded-[12.975px] shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">Define</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        Users want to support local bookstores but lack an easy way to check real-time stock across multiple stores, causing inconvenience, wasted time, and uncertainty.
        <br aria-hidden="true" />
        {` This leads to defining the MVP around unified search, stock visibility, and pickup flow.`}
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[12.975px] h-[266px] items-start overflow-clip px-[12.975px] py-[16.868px] relative rounded-[12.975px] shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">Ideate</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        Unified search bar, real-time inventory connections, book cards, stock indicators, map integration, and optional filters.
        <br aria-hidden="true" />
        {` Additional ideas can include used-book filters or events calendars (not required for MVP).`}
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[12.975px] h-[266px] items-start overflow-clip px-[12.975px] py-[16.868px] relative rounded-[12.975px] shrink-0">
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">Prototype</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        <p className="mb-0">Low-fidelity wireframes for search, results, and inventory flows.</p>
        <p>High-fidelity UI using the defined classic, cozy bookstore-inspired visual identity.</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[12.975px] h-[266px] items-start overflow-clip px-[12.975px] py-[16.868px] relative rounded-[12.975px] shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[14.273px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[25.95px] w-[199.815px]">Testing</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">
        <p className="mb-0">Speed and clarity in the search experience</p>
        <p className="mb-0">Accuracy and readability of stock information</p>
        <p className="mb-0">Simplicity in the “Hold for Pickup” process</p>
        <p>Map usefulness and navigation clarity</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[12.975px] items-start overflow-clip px-[12.975px] py-[16.868px] relative rounded-[12.975px] shrink-0">
      <Frame21 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1163.28px]">
      <Frame14 />
      <Frame16 />
      <Frame18 />
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[46.958px] items-start relative shrink-0">
      <div className="font-['Poppins:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[74.706px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">Design</p>
        <p>Thinking.</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[21.345px] items-start px-[53.361px] py-[64.034px] relative w-full">
          <Frame8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[46.958px] items-start relative shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[74.706px] text-black text-nowrap whitespace-pre">Wireframes</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex gap-[53.361px] items-center left-[53.36px] top-[64.03px]">
      <Frame24 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[706px] relative rounded-[20px] shrink-0 w-full">
      <div className="h-[706px] overflow-clip relative rounded-[inherit] w-full">
        <Frame28 />
        <div className="absolute h-[459px] left-[64px] top-[221.27px] w-[217px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/INDIE%20Onboarding.png" />
        </div>
        <div className="absolute h-[459px] left-[calc(50%-139.5px)] top-[226.24px] translate-x-[-50%] w-[217px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/INDIE%20Login.png" />
        </div>
        <div className="absolute h-[459px] left-[775px] top-[226.24px] w-[217px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/INDIE%20Home.png" />
        </div>
        <div className="absolute h-[459px] left-[1095px] top-[226.24px] w-[217px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/INDIE%20Results%20Page.png" />
        </div>
        <div className="absolute h-[359px] left-[435px] top-[221.26px] w-[491px]" />
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[77px] not-italic text-[16.336px] text-black top-[176.26px] w-[174.674px]">{`INDIE-Onboarding `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[calc(50%-194px)] not-italic text-[16.336px] text-black top-[184.24px] w-[219px]">{`INDIE- Login `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[801px] not-italic text-[16.336px] text-black top-[183.24px] w-[219px]">{`INDIE - Home `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[1095px] not-italic text-[16.336px] text-black top-[183.24px] w-[219px] whitespace-pre-wrap">{`INDIE - Search Results  `}</p>
        {/* Additional wireframe stock images */}
        <div className="absolute h-[200px] left-[30px] top-[500px] w-[350px] rounded-[8px] overflow-hidden">
        
        </div>
        <div className="absolute h-[200px] left-[400px] top-[500px] w-[350px] rounded-[8px] overflow-hidden">
          
        </div>
        <div className="absolute h-[200px] left-[770px] top-[500px] w-[350px] rounded-[8px] overflow-hidden">
          
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[46.958px] items-start relative shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[74.706px] text-black text-nowrap whitespace-pre">Prototype</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex gap-[53.361px] items-center left-[53px] top-[64px]">
      <Frame25 />
    </div>
  );
}

function Frame29() {
  return <div className="absolute h-[55.232px] left-[184px] top-[709.26px] w-[978.148px]" />;
}

function LogosFigma() {
  return (
    <div className="h-[25.349px] relative shrink-0 w-[16.9px]" data-name="logos:figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 26">
        <g clipPath="url(#clip0_1_754)" id="logos:figma">
          <path d={svgPaths.p3f46c100} fill="var(--fill-0, #0ACF83)" id="Vector" />
          <path d={svgPaths.p2962fb72} fill="var(--fill-0, #A259FF)" id="Vector_2" />
          <path d={svgPaths.p30ab7700} fill="var(--fill-0, #F24E1E)" id="Vector_3" />
          <path d={svgPaths.p2d5ccb80} fill="var(--fill-0, #FF7262)" id="Vector_4" />
          <path d={svgPaths.p15558600} fill="var(--fill-0, #1ABCFE)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_754">
            <rect fill="white" height="25.3494" width="16.8996" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#2954a3] box-border content-stretch flex gap-[21.345px] items-center justify-center px-[21.345px] py-[8.538px] relative rounded-[4.269px] shrink-0">
      <LogosFigma />
      <a className="[white-space-collapse:collapse] block font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[16.336px] text-black text-nowrap" href="https://www.figma.com/design/aC0Vx1wNBDEvjhUMmdNScJ/INDIE-Prototype?t=Al5MO9hRx4yI5I7Y-1">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline whitespace-pre">https://www.figma.com/design/aC0Vx1wNBDEvjhUMmdNScJ/INDIE-Prototype?t=Al5MO9hRx4yI5I7Y-1</p>
      </a>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute box-border content-stretch flex gap-[21.345px] items-center left-[95px] px-[10.672px] py-[6.403px] rounded-[10.672px] top-[714.26px]">
      <div aria-hidden="true" className="absolute border-[1.067px] border-black border-solid inset-0 pointer-events-none rounded-[10.672px]" />
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16.336px] text-black text-nowrap whitespace-pre">{` Prototype`}</p>
      <Frame26 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[817px] relative rounded-[20px] shrink-0 w-full">
      <div className="h-[817px] overflow-clip relative rounded-[inherit] w-full">
        <Frame30 />
        <Frame29 />
        <Frame27 />
        <div className="absolute h-[459px] left-[64px] top-[221.27px] w-[217px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Onboarding.png" />
        </div>
        <div className="absolute h-[459px] left-[calc(50%-139.5px)] top-[226.24px] translate-x-[-50%] w-[217px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Login.png" />
        </div>
        <div className="absolute h-[459px] left-[775px] top-[226.24px] w-[217px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Home.png" />
        </div>
        <div className="absolute h-[459px] left-[1095px] top-[226.24px] w-[217px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Search%20Bar%20Results.png" />
        </div>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[107px] not-italic text-[16.336px] text-black top-[170.27px] w-[174.674px]">{`INDIE-Onboarding `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[465px] not-italic text-[16.336px] text-black top-[173.24px] w-[219px]">{`INDIE- Login `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[801px] not-italic text-[16.336px] text-black top-[177.24px] w-[219px]">{`INDIE - Home `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[1111px] not-italic text-[16.336px] text-black top-[179.24px] w-[219px] whitespace-pre-wrap">{`INDIE - Search  Bar Results `}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[90px] items-start left-1/2 top-[1901px] translate-x-[-50%] w-[1366px]">
      <Frame1 />
      <Frame23 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Home2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p1e128b00} fill="var(--fill-0, #F2F2F2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <Home2 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[#f2f2f2] text-[17px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function Home3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Home">
      <Frame34 />
      <Frame33 />
    </div>
  );
}

function PersonOutline1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="person_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="person_outline">
          <path d={svgPaths.p18946880} fill="var(--fill-0, #F2F2F2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <PersonOutline1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[#f2f2f2] text-[17px] text-nowrap whitespace-pre">About me</p>
    </div>
  );
}

function About1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="About">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function PhoneFill1() {
  return (
    <div className="relative shrink-0 size-[23px]" data-name="Phone_fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Phone_fill">
          <path d={svgPaths.p2dbe2d00} fill="var(--fill-0, #F2F2F2)" id="Vector 189" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <PhoneFill1 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0">
      <button className="[white-space-collapse:collapse] block cursor-pointer font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f2f2f2] text-[17px] text-nowrap">
        <p className="leading-[1.432] whitespace-pre">Contact</p>
      </button>
    </div>
  );
}

function Contact1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Contact">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex gap-[50px] items-start left-[112px] top-[99px]" data-name="Menu">
      <Home3 />
      <About1 />
      <Contact1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black h-[226px] left-0 overflow-clip top-[6046px] w-[1536px]" data-name="Footer">
      <Menu />
      <div className="absolute bg-[rgba(255,255,255,0.15)] h-[2px] left-[40px] top-[316px] w-[1360px]" data-name="Separator" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute bg-white h-[98px] left-0 overflow-clip top-0 w-[1536px]">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[1.432] left-[44px] not-italic text-[#fffefe] text-[24px] text-nowrap top-[36px] whitespace-pre">YOUR LOGO</p>
    </div>
  );
}

function Home4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Home">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[17px] text-black text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function About2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="About">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[17px] text-black text-nowrap whitespace-pre">About me</p>
    </div>
  );
}

function Work1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Work">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[17px] text-black text-nowrap whitespace-pre">Work</p>
    </div>
  );
}

function TopMenu() {
  return (
    <div className="absolute content-stretch flex gap-[70px] items-center justify-center left-[1040px] top-[21px]" data-name="Top menu">
      <Home4 />
      <About2 />
      <Work1 />
    </div>
  );
}

export default function SingleProjectPageCompany() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="Single-project page-company2">
      <HomePage />
      <Frame40 />
      <div className="absolute h-[895px] left-1/2 rounded-[50px] top-[957px] translate-x-[-50%] w-[1350px]">
        <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[50px] size-full" src="https://ik.imagekit.io/nn50yidhh/Desktop%20-%201.png" />
      </div>
      <Footer />
      <Frame41 />
      <button className="[white-space-collapse:collapse] absolute block cursor-pointer font-['Poppins:Medium',sans-serif] leading-[0] left-[90px] not-italic text-[17px] text-black text-nowrap top-[36px]" data-name="BackToProjects">
        <p className="leading-[1.432] whitespace-pre">{`Back to Projects `}</p>
      </button>
      <button className="absolute block cursor-pointer inset-[0.65%_94.47%_99.11%_3.91%]" data-name="BackToProjects">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 15">
          <path d={svgPaths.p279eb280} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </button>
      <TopMenu />
    </div>
  );
}