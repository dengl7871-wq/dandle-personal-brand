export type SocialLink = {
  label: string;
  handle: string;
  href: string;
};

export type BentoCard = {
  title: string;
  description: string;
  meta?: string;
  variant: "wide" | "tall" | "normal";
};

export const site = {
  name: "Dandle",
  legalName: "邓达凌",
  portrait: "/portrait.jpg",
  role: "面向中学生的 AI+理科双语教育者",
  secondaryRole: "新世代 AI 命理开拓者",
  location: "长沙 / 悉尼",
  headline: "用 AI 编程\n重塑理科课堂",
  intro:
    "UNSW 土木工程硕士，专注 AI 编程入门与双语物理教学。用工程思维拆解复杂问题，为学校招聘方呈现可落地的 AI+理科课堂能力。",
  about:
    "我把工程、AI 与双语理科表达结合起来，帮助中学生用更真实的方式理解物理、数学与人工智能。",
  aboutTags: ["UNSW 工程硕士", "双语物理", "AI 编程入门"],
  audience: "学校招聘方",
  primaryAction: {
    label: "关注我的更新",
    href: "#follow"
  },
  secondaryAction: {
    label: "联系合作",
    href: "mailto:1367879380@qq.com"
  },
  signal: ["AI 编程入门", "双语物理", "AI+理科课堂"],
  socials: [
    {
      label: "小红书",
      handle: "烛",
      href: "#"
    },
    {
      label: "公众号",
      handle: "炳烛室",
      href: "#"
    },
    {
      label: "Email",
      handle: "1367879380@qq.com",
      href: "mailto:1367879380@qq.com"
    }
  ] satisfies SocialLink[],
  bento: [
    {
      title: "AI 编程启发",
      description:
        "从变量、条件、数据到简单模型，把 AI 编程入门变成中学生能跟上的探究式学习。",
      meta: "Python / AI Basics",
      variant: "wide"
    },
    {
      title: "工程底层逻辑",
      description:
        "土木工程与力学背景，让物理公式不止停留在纸面，而是连接桥梁、城市与真实世界。",
      meta: "UNSW Civil Engineering",
      variant: "normal"
    },
    {
      title: "双语理科表达",
      description:
        "熟悉全英文工程学习环境，擅长把中英文物理术语转译成清晰、准确、有节奏的课堂语言。",
      meta: "Bilingual Physics",
      variant: "tall"
    },
    {
      title: "创作者主页",
      description:
        "这里不会堆作品集，只保留最重要的信息：我是谁、我做什么、在哪里持续输出。",
      meta: "Minimal by design",
      variant: "normal"
    }
  ] satisfies BentoCard[]
};
