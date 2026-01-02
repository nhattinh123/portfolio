import {
    Award,
    BookOpen,
    Briefcase,
    Cloud,
    Code2,
    Coffee,
    Database,
    Dribbble,
    Gamepad2,
    GraduationCap,
    Headphones,
    Heart,
    Mail,
    MapPin,
    Network,
    PencilRuler,
    Phone,
    Rocket,
    Server,
    Users,
    Zap,
} from 'lucide-react';


import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

import webtoeic from "../assets/images/WebToeic.png";
import webcandy from "../assets/images/WebCandy.png";
import webroom from "../assets/images/WebRoom.png";
import webshoes from "../assets/images/WebShoes.png";
import websecondhand from "../assets/images/WebSecondhand.png";
import web3 from "../assets/images/web3.png";
import web2 from "../assets/images/web2.png";
import web1 from "../assets/images/web1.png";
// Skills
export const skills_category = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Thành thạo các công nghệ giao diện người dùng hiện đại, tập trung vào trải nghiệm người dùng, responsive và hiệu suất.",
        skills: [
            { name: "HTML", level: 95, color: "bg-orange-600" },
            { name: "CSS / Tailwind", level: 85, color: "bg-sky-400" },
            { name: "ReactJS", level: 80, color: "bg-cyan-500" },
            { name: "VueJS", level: 55, color: "bg-emerald-500" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Có kinh nghiệm làm việc với các công nghệ backend phổ biến, xử lý logic nghiệp vụ, API và quản lý máy chủ.",
        skills: [
            { name: "ASP.NET", level: 90, color: "bg-purple-700" },
            { name: "Node.js", level: 75, color: "bg-lime-600" },
            { name: "Express.js", level: 70, color: "bg-zinc-600" },
            { name: "RESTful API", level: 80, color: "bg-yellow-500" },
        ],
    },
    {
        title: "Cloud",
        icon: Cloud,
        description: "Hiểu biết cơ bản về các nền tảng đám mây và công cụ triển khai ứng dụng, CI/CD và quản lý tài nguyên cloud.",
        skills: [
            { name: "Vercel", level: 80, color: "bg-neutral-900" },
            { name: "Netlify", level: 75, color: "bg-teal-500" },
            { name: "Github", level: 60, color: "bg-slate-700" },
            { name: "Docker", level: 40, color: "bg-blue-400" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Làm việc với cơ sở dữ liệu quan hệ và phi quan hệ để lưu trữ, truy vấn và xử lý dữ liệu hiệu quả.",
        skills: [
            { name: "SQL Server", level: 90, color: "bg-red-700" },
            { name: "MySQL", level: 80, color: "bg-blue-600" },
            { name: "MongoDB", level: 85, color: "bg-green-700" },
        ],
    }
];

export const tech_stack = [
    "WORDPRESS",
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "VueJS",
    "Tailwind CSS",
    "Bootstrap",
    "ASP.NET",
    "C#",
    "Java",
    "Python",
    "Node.js",
    "MongoDB",
    "MySQL",
    "SQL Server",
    "Github",
];

export const stats = [
    { number: "20", icon: Code2, label: "Dự án đã xây dựng" },
    { number: "9+", icon: Users, label: "Khách hàng hài lòng" },
    { number: "10", icon: Network, label: "Trang web trực tiếp" },
    { number: "95%", icon: Zap, label: "Điểm hiệu suất" },
];

// Projects
export const projects = [
    {
        id: 1,
        title: "TOEIC Test Practice Website",
        description: "Website luyện thi TOEIC trực tuyến giúp người học ôn luyện hiệu quả với kho đề thi sát với đề thật. Hệ thống chấm điểm tự động, hiển thị đáp án và giải thích chi tiết từng câu hỏi. Người dùng có thể luyện tập theo từng kỹ năng, theo dõi tiến độ và đặt mục tiêu học tập cá nhân.",
        image: webtoeic,
        tags: ["Wordpres","React", "NodeJS", "MySQL", "JavaScript"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Web App",
    },
    {
        id: 2,
        title: "Website Selling Candy",
        description: "Website bán bánh kẹo trực tuyến cung cấp đa dạng các loại bánh ngọt, kẹo ngoại nhập và đặc sản vùng miền. Giao diện thân thiện, dễ sử dụng, hỗ trợ đặt hàng nhanh chóng. Chất lượng sản phẩm được đảm bảo, giao hàng tận nơi, thanh toán linh hoạt. Mang đến trải nghiệm mua sắm tiện lợi và ngọt ngào cho mọi khách hàng.",
        image: webcandy,
        tags: ["Wordpres","React", "NodeJS", "MongoDB", "JavaScript"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Web App",
    },
    {
        id: 3,
        title: "Room Rental Website",
        description: "Website cho thuê phòng trọ, căn hộ, phòng ở ghép uy tín với thông tin rõ ràng, hình ảnh thực tế. Người dùng dễ dàng tìm kiếm phòng theo vị trí, giá, tiện nghi. Giao diện thân thiện, hỗ trợ đăng tin miễn phí và kết nối nhanh giữa người thuê và chủ phòng.",
        image: webroom,
        tags: ["Wordpres","React", "NodeJS", "MongoDB", "JavaScript"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Web App",
    },
    {
        id: 4,
        title: "Website Selling Shoes",
        description: "Website bán giày thời trang với nhiều mẫu mã đa dạng, từ giày thể thao, giày da đến giày sneaker cao cấp. Sản phẩm chính hãng, cập nhật xu hướng mới nhất, phù hợp mọi độ tuổi. Giao hàng nhanh chóng, đổi trả linh hoạt, mang đến trải nghiệm mua sắm tiện lợi và uy tín.",
        image: webshoes,
        tags: ["Wordpres","React", "NodeJS", "MongoDB", "JavaScript"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Web App",
    },
    {
        id: 5,
        title: "Second-hand Market Website",
        description: "Website chợ đồ cũ trực tuyến giúp kết nối người mua và bán các mặt hàng đã qua sử dụng như đồ điện tử, nội thất, quần áo, xe máy,... Giao diện dễ dùng, đăng tin nhanh chóng, hỗ trợ tìm kiếm theo khu vực. Giải pháp tiết kiệm chi phí và bảo vệ môi trường thông qua việc tái sử dụng đồ cũ.",
        image: websecondhand,
        tags: ["Wordpres","ASP.Net", "MVC", "C#", "SQLs"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Web App",
        
    },
     {
        id: 6,
        title: "CÔNG TY SỰ KIỆN CLI2PER",
        description: "Thiết kế website doanh nghiệp cho Cli2per với giao diện hiện đại, tốc độ tối ưu và trải nghiệm mượt mà giúp tăng uy tín và hiệu quả truyền thông cho thương hiệu.",
        image: web3,
        tags: ["Wordpres"],
        liveUser: "https://cli2per.com/",
        githubUrl: "#",
        featured: false,
        category: "Web ",
        
    },
    {
        id: 7,
        title: "CÔNG TY CÔNG NGHỆ VISONTECO",
        description: "Thiết kế website doanh nghiệp cho VISIONTECO.COM.VN với giao diện hiện đại, tốc độ tối ưu và trải nghiệm mượt mà, giúp tăng uy tín và hiệu quả truyền thông cho thương hiệu.",
        image: web2,
        tags: ["Wordpres"],
        liveUser: "https://visionteco.com.vn/",
        githubUrl: "#",
        featured: false,
        category: "Web ",
        
    },
    {
        id: 8,
        title: "CÔNG TY DU LỊCH VIETTREKTRAVEL",
        description: "Thiết kế website doanh nghiệp cho VIETTREKTRAVEL với bố cục rõ ràng, giao diện hiện đại và tốc độ tải nhanh, giúp thương hiệu thể hiện sự chuyên nghiệp và thu hút khách hàng tốt hơn.",
        image: web1,
        tags: ["Wordpres"],
        liveUser: "https://viettrektravel.com/",
        githubUrl: "#",
        featured: false,
        category: "Web ",
        
    },
     {
        id: 9,
        title: "Cửa hàng đặt đồ ăn & đồ uống Việt tại Slovakia",
        description: "Thiết kế website bán đồ ăn uống cho VIETTAFOOD với bố cục rõ ràng, giao diện hiện đại và tốc độ tải nhanh, giúp thương hiệu thể hiện sự chuyên nghiệp và thu hút khách hàng tốt hơn.",
        image: web1,
        tags: ["Wordpres"],
        liveUser: "https://viettrektravel.com/",
        githubUrl: "#",
        featured: false,
        category: "Web ",
        
    },
];

// About
export const passions = [
    {
        icon: Dribbble,
        title: "Đá bóng",
        description: "Rèn luyện thể chất, nâng cao tinh thần đồng đội và giải tỏa căng thẳng sau những giờ học và làm việc căng thẳng.",
    },
    {
        icon: Headphones,
        title: "Nghe nhạc",
        description: "Thưởng thức âm nhạc để thư giãn tinh thần, tìm cảm hứng sáng tạo trong công việc và cuộc sống.",
    },
    {
        icon: BookOpen,
        title: "Đọc sách",
        description: "Mở rộng kiến thức, nâng cao tư duy và trau dồi kỹ năng thông qua những trang sách giá trị.",
    },
    {
        icon: Gamepad2,
        title: "Chơi game",
        description: "Giải trí, rèn luyện phản xạ và tư duy chiến thuật thông qua các trò chơi điện tử yêu thích.",
    },
];

export const journey_steps = [
    {
        year: "09/2021",
        title: "Bắt đầu học đại học ngành Kỹ thuật phần mềm",
        company: "Đại Học Nguyễn Tất Thành",
        description: "Chính thức trở thành sinh viên ngành Kỹ thuật phần mềm. Bắt đầu hành trình học tập các kiến thức nền tảng về lập trình, phát triển phần mềm, cơ sở dữ liệu và kỹ năng làm việc nhóm trong môi trường công nghệ.",
        icon: GraduationCap,
        color: "bg-blue-500",
    },
    {
        year: "05/2024",
        title: "Giải khuyến khích cuộc thi KTPM",
        company: "Đại Học Nguyên Tất Thành",
        description: "Tham gia cuộc thi chuyên ngành Kỹ thuật phần mềm với đề tài xây dựng ứng dụng web. Áp dụng các kiến thức về phân tích yêu cầu, thiết kế hệ thống, và phát triển frontend bằng ReactJS.",
        icon: Award,
        color: "bg-purple-500",
    },
    {
        year: "07/2024",
        title: "Giải khuyến khích cuộc thi Triển khai hệ thống Mạng",
        company: "Đại Học Nguyên Tất Thành",
        description: "Tham gia triển khai mô hình mạng nội bộ và cấu hình các thiết bị mạng cơ bản. Thể hiện kỹ năng phối hợp nhóm, xử lý tình huống thực tế và vận dụng kiến thức hạ tầng mạng trong thực hành.",
        icon: Network,
        color: "bg-green-500",
    },
    {
        year: "09/09/2024",
        title: "Thực tập sinh Frontend",
        company: "Công ty Cổ phần Tập đoàn Đầu tư Công nghệ Nam Long ",
        description: "Tham gia phát triển giao diện người dùng bằng VueJS, đảm bảo tính responsive trên nhiều thiết bị. Làm việc với API và tối ưu hiệu suất trang web. Học hỏi quy trình phát triển phần mềm theo mô hình chuẩn SEO, phối hợp với backend và thiết kế UI/UX",
        icon: Briefcase,
        color: "bg-pink-500",
    },
    {
        year: "31/05/2025",
        title: "Tốt nghiệp Đại học",
        company: "Đại Học Nguyễn Tất Thành",
        description: "Hoàn thành chương trình kỹ sư ngành Kỹ thuật phần mềm với xếp loại Giỏi. Trang bị vững chắc kiến thức nền tảng về lập trình, phát triển phần mềm và các kỹ năng làm việc nhóm, giải quyết vấn đề.",
        icon: GraduationCap,
        color: "bg-indigo-500",
    }
];

// Contact
export const contact_info = [
    {
        icon: MapPin,
        label: "Địa chỉ",
        value: "Cái Răng - Cần Thơ ",
    },
    {
        icon: Mail,
        label: "Email",
        value: "nhattinh383@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+84 833456692",
    },
];

export const social_link = [
    {
        name: "Github",
        icon: FiGithub,
        url: "",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "Linkedin",
        icon: FiLinkedin,
        url: "#",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "#",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10",
    },
    {
        name: "Mail",
        icon: Mail,
        url: "#",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
    {
        name: "Youtube",
        icon: FaYoutube,
        url: "",
        color: "hover:text-red-500",
        bgColor: "hover:bg-red-500/10",
    },
];