
interface ProjectDTO {
    title: string,
    description: string
    url: string,
    imageUrl: string,
    tags?: string[]
}

export const ProjectData: ProjectDTO[] = [
    {
        title: "Curare Pro Lading Page",
        description: "Curare provides cutting-edge healthcare solutions that streamline workflows, enhance patient care, and optimize operations for healthcare facilities.",
        url: "https://curare.info/",
        imageUrl: "/images/curare.png",
        tags: ["Company-base", "React", "Typescipt", "Tailwind"]
    },
    {
        title: "Curare Pro EHR",
        description: "Curare provides cutting-edge healthcare solutions that streamline workflows, enhance patient care, and optimize operations for healthcare facilities.",
        url: "https://curare.dev/dashboard/login",
        imageUrl: "/images/curare-pro.png",
        tags: ["Company-base", "React", "Typescipt", "Tailwind"]
    },
    {
        title: "Sedis-Plus Ghana",
        description: "A company of choice in the gold tailings processing and extraction sector in Ghana's mining industry.",
        url: "https://sedisplusgh.com/",
        imageUrl: "/images/sedis.png",
        tags: ["Contract", "NextJs", "Typescipt", "Tailwind"]
    },
    {
        title: "Carevoucher",
        description: "CareVoucher removes financial roadblocks to healthcare access — especially in underserved communities — by safeguarding medical funds and ensuring they're used exactly as intended",
        url: "https://curare.info/carevoucher",
        imageUrl: "/images/carevoucher.png",
        tags: ["Company-base", "NextJS", "Typescipt", "Tailwind"]
    },
    {
        title: "Grace Phyto Clinic",
        description: "Delivering the promise of healthy lives and happy homes.",
        url: "https://gracephytoclinic.com/?i=1",
        imageUrl: "/images/gracephyto.png",
        tags: ["Contract", "HTML", "CSS", "Javascript"]
    },
    {
        title: "Crypto Dashboard",
        description: "A simple dashboard for monitoring cryptocurrency prices and trends.",
        url: "https://crypto-wallet-dashbaord.vercel.app/",
        imageUrl: "/images/crypto.png",
        tags: ["Personal Project", "React", "Javascript", "Tailwind", "Vercel"]
    }
]