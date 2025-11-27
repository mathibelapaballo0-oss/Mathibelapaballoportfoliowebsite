import image_ca7986f51e9f6497e0eef568ec8c9856ff589df9 from 'figma:asset/ca7986f51e9f6497e0eef568ec8c9856ff589df9.png';
import svgPaths from "./svg-bfxxtgcljl";
import imgRectangle64 from "figma:asset/26b52b5b0561b638eb443dfd0016b7cf61337186.png";
import imgRectangle66 from "figma:asset/f02fca2d3f3a603a248ee47fd1e5b897bb941890.png";
import imgRectangle65 from "figma:asset/da7f8e6b8053d6cc841893c9bbd126671830dadb.png";
import imgRectangle72 from "figma:asset/818ed5242d22d51e5675556277c91fa08ebd2436.png";
import imgRectangle73 from "figma:asset/d0c6440fe7da13749d9a22f9cea5c9d900ebdc41.png";
import imgRectangle74 from "figma:asset/6a0b04b478c8520a223dc27db11ce1523a6e542b.png";
import imgRectangle75 from "figma:asset/ba13bd925d4c3640e4b69d22cd492698fbcb0adc.png";
import imgRectangle76 from "figma:asset/e283f33f7a0b81bec2284b4122519649d3d8ca92.png";
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
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[134px] not-italic text-[20.671px] text-black text-nowrap top-[513px] whitespace-pre">{`Time Line `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[486px] not-italic text-[20.671px] text-black text-nowrap top-[519px] whitespace-pre">{`Platform `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[865px] not-italic text-[20.671px] text-black text-nowrap top-[513px] whitespace-pre">{`Team  `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[1224px] not-italic text-[20.671px] text-black text-nowrap top-[513px] whitespace-pre">{`Year `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[896px] not-italic text-[20.671px] text-black text-nowrap top-[559px] whitespace-pre">1</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[134px] not-italic text-[20.671px] text-black text-nowrap top-[566px] whitespace-pre">{`3 weeks `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[486px] not-italic text-[20.671px] text-black text-nowrap top-[574px] whitespace-pre">{`Figma (Desktop) `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[1224px] not-italic text-[20.671px] text-black text-nowrap top-[574px] whitespace-pre">2025</p>
      <div className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[134px] not-italic text-[20.671px] text-black top-[227px] w-[1286px]">
        <p className="mb-0">Drift - Fashion, Work, and Travel Luggage E-commerce Website</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Poppins:Regular',sans-serif]">{`Drift is a modern lifestyle brand at the intersection of fashion, work, and travel. We are launching a new line of sophisticated, versatile, and durable luggage and bags designed for the dynamic professional. We are seeking a top-tier design agency to partner with us in creating a world-class e-commerce website. The primary goal is to build a seamless, intuitive, and visually stunning online experience that communicates our brand's unique value proposition. This platform will be our primary sales channel, telling the story of a brand that moves effortlessly from the boardroom to the airport terminal and beyond.`}</p>
      </div>
      <div className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[136px] not-italic text-[20.671px] text-black text-nowrap top-[647px] whitespace-pre">
        <p className="mb-0">My Role</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">Lead Product Designer</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• Lead the end-to-end design process from research and discovery through interface design and usability testing</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• Conducted user research</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• Created user personas and journey maps and Crafted wireframes</p>
        <p className="font-['Poppins:Regular',sans-serif] mb-0">• Delivered high-fidelity UI designs aligned with Drift’s sophisticated, modern brand identity</p>
    
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[23.479px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[42.689px] w-[285px]">Problem Statement</p>
      <p className="font-['Poppins:Regular',sans-serif] h-[329px] leading-[normal] relative shrink-0 text-[20.671px] w-[316px]">Drift is launching a new line of premium fashion forward luggage designed for modern professionals but the brand lacks a digital platform capable of showcasing its sophisticated products and delivering a seamless shopping experience. Current e-commerce competitors often fail to combine luxury aesthetics with intuitive browsing and functional shopping tools. To successfully position itself in the market, Carregar needs a highly polished, user-centric website that clearly communicates the brand’s lifestyle value while enabling effortless product discovery, comparison, and checkout.</p>
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
            <span className="leading-[normal] text-black">A clean and intuitive way to browse and filter luggage by size, features, style, and functionality.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">High-quality visuals 360° views, lifestyle shots, and detailed product information to make informed purchase decisions.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">A quick and frictionless checkout process with modern payment options like Payfast, Apple Pay, Google Pay, Ozow, and PayPal.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">A reliable system for tracking orders, viewing history, and managing returns.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Curated content that inspires professional and travel lifestyles.</span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal] text-black">Compatibility across all devices, especially mobile</span>
          </li>
        </ul>
      </div>
      <div className="relative shrink-0 w-[363px]">
        <p className="leading-[normal] mb-0">Struggles</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Difficulty comparing features across bags when shopping on competitor sites.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Confusion due to poor navigation or unclear product categorization.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Lack of storytelling or lifestyle context to show how a bag fits into work-and-travel routines.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Slow or complicated checkout processes that lead to abandoned carts.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal] text-black">Not enough personalization or customization options.</span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal] text-black">{`Reliance on generic product photography that doesn't reflect the brand’s premium nature.`}</span>
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
    <div className="content-stretch flex h-[750px] items-start justify-between relative shrink-0 w-[1164px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[23.479px] items-start leading-[0] not-italic relative shrink-0 text-black w-[1142px]">
      <div className="font-['Poppins:Bold',sans-serif] leading-[0.9] relative shrink-0 text-[42.689px] w-[328.706px]">
        <p className="mb-0">Proposed</p>
        <p>Solution</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[20.671px] w-[1098px]">
        <p className="leading-[normal] mb-0">Design and develop a world-class, responsive e-commerce platform that reflects Drifts polished, editorial brand identity. The solution includes:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">A refined information architecture with intuitive navigation and faceted search.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">Beautiful, high resolution product pages featuring 360° views, lifestyle photos, video content, and detailed specifications.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">Tools such as product comparison, bundling (“Complete Your Collection”), wishlist, and “Notify Me.”</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">A fast and simplified one page checkout offering multiple secure payment options.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">A customer account system for tracking, returns, order history, and saved preferences.</span>
          </li>
          <li className="mb-0 ms-[31.0065px]">
            <span className="leading-[normal]">A lifestyle driven content hub (“The Journal”) for travel guides, professional insights, and styling inspiration.</span>
          </li>
          <li className="ms-[31.0065px]">
            <span className="leading-[normal]">A scalable design system ensuring visual consistency across all pages and devices.</span>
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
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">Conducted stakeholder interviews, studied competitor platforms, and carried out user interviews to understand the behaviors and frustrations of working professionals who balance travel and style. Developed personas representing business travelers, hybrid workers, and urban professionals.</p>
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
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">Synthesized research findings to identify key user pain points like unclear navigation, lack of product clarity, and slow checkout processes. Formulated the problem statement: users need a premium and intuitive online shopping experience that matches the sophistication and functionality of Drift products.</p>
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
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">Here, multiple ideas are explored to solve the defined problems. Designers brainstorm interface concepts, workflows, and features such as the at-risk dashboard, student 360 profile, intervention manager, and risk trend visualization. The goal is to generate a variety of possible solutions before narrowing down the most effective ones.</p>
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
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">Created low-fidelity mobile and desktop wireframes to map core interactions. Developed interactive prototypes showcasing the shopping flow from browsing to checkout to validate usability assumptions.</p>
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
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[12.565px] w-[199.815px]">Conducted usability testing with target users. Identified friction points in navigation clarity, purchase confirmation visibility, and product comparison UI. Iterated and refined the interface based on feedback to ensure a seamless experience.</p>
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
        <p>Thinking</p>
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
        <div className="absolute h-[398px] left-[46px] top-[221.24px] w-[294px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Hommmee.png" />
        </div>
        <div className="absolute h-[352.982px] left-[calc(50%-150.5px)] top-[221.24px] translate-x-[-50%] w-[277px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Aaabout%20Us.png" />
        </div>
        <div className="absolute h-[238px] left-[716px] top-[221.24px] w-[256px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Shooop.png" />
        </div>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[77px] not-italic text-[16.336px] text-black top-[176.26px] w-[174.674px]">{`Drift-Home `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] h-[21px] leading-[0.9] left-[calc(50%-257px)] not-italic text-[16.336px] text-black top-[171.24px] w-[213px]">{`Drift-About Us `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] h-[13px] leading-[0.9] left-[743px] not-italic text-[16.336px] text-black top-[171.24px] w-[219px]">Drift-Shop</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] h-[13px] leading-[0.9] left-[1044px] not-italic text-[16.336px] text-black top-[169.24px] w-[219px]">{`Drift-Wishlist `}</p>
        <div className="absolute h-[269px] left-[1017px] top-[221.24px] w-[315px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Wishlistttttttt.png" />
        </div>
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
      <a className="[white-space-collapse:collapse] block font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[16.336px] text-black text-nowrap" href="https://www.figma.com/proto/5JIZaLqzcMXwUDsQ88mWN1/Drift--Prototype?node-id=0-1&t=jWGNCEw7tpgu0HVR-1">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline whitespace-pre">https://bit.ly/MaqubsAcademyWebUI</p>
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
        <div className="absolute h-[359px] left-[448px] top-[279.26px] w-[491px]" />
        <div className="absolute h-[246px] left-[960px] top-[279.26px] w-[304px]" />
        <div className="absolute h-[398px] left-[28px] top-[224.24px] w-[294px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Oomee.png?updatedAt=1764177219221" />
        </div>
        <div className="absolute h-[352.982px] left-[calc(50%-168.5px)] top-[224.24px] translate-x-[-50%] w-[277px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/About%20Us.png" />
        </div>
        <div className="absolute h-[238px] left-[698px] top-[224.24px] w-[256px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Shop.png" />
        </div>
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[0.9] left-[59px] not-italic text-[16.336px] text-black top-[179.26px] w-[174.674px]">{`Drift-Home `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] h-[21px] leading-[0.9] left-[calc(50%-275px)] not-italic text-[16.336px] text-black top-[174.24px] w-[213px]">{`Drift-About Us `}</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] h-[13px] leading-[0.9] left-[725px] not-italic text-[16.336px] text-black top-[174.24px] w-[219px]">Drift-Shop</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] h-[13px] leading-[0.9] left-[1026px] not-italic text-[16.336px] text-black top-[172.24px] w-[219px]">{`Drift-Wishlist `}</p>
        <div className="absolute h-[269px] left-[999px] top-[224.24px] w-[315px]">
          <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="https://ik.imagekit.io/nn50yidhh/Wishlist.png" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[90px] items-start left-[calc(50%+11px)] top-[2004px] translate-x-[-50%] w-[1366px]">
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
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.432] not-italic relative shrink-0 text-[#f2f2f2] text-[17px] text-nowrap whitespace-pre">Contact</p>
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
    <div className="absolute bg-black h-[226px] left-[-12px] overflow-clip top-[6046px] w-[1536px]" data-name="Footer">
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
    <div className="bg-[#f2f2f2] relative size-full" data-name="Single-project page-company3">
      <HomePage />
      <Frame40 />
      <div className="absolute h-[895px] left-[calc(50%+3px)] rounded-[50px] top-[1012px] translate-x-[-50%] w-[1350px]">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[50px] size-full" src="https://ik.imagekit.io/nn50yidhh/Oomee.png?updatedAt=1764177219221" />
      </div>
      <Footer />
      <Frame41 />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.432] left-[90px] not-italic text-[17px] text-black text-nowrap top-[36px] whitespace-pre cursor-pointer" data-name="BackToProjects">{`Back to Projects `}</p>
      <div className="absolute inset-[0.65%_94.47%_99.11%_3.91%] cursor-pointer" data-name="BackToProjects">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 15">
          <path d={svgPaths.p279eb280} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <TopMenu />
    </div>
  );
}