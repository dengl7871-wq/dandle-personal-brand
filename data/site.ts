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

export type ProofPoint = {
  value: string;
  label: string;
};

export type ContentBlock = {
  title: string;
  description: string;
  tags?: string[];
};

export const site = {
  name: "Dandle",
  legalName: "邓达凌",
  portrait: "/f19218fe-0b76-4a98-9790-8f03a9088269.png",
  role: "AI+理科双语教育者 / STEM课程研发者",
  secondaryRole: "新世代 AI 理科教育开拓者",
  location: "长沙 / 悉尼",
  headline: "把 AI 带进\n中学理科课堂",
  intro:
    "UNSW（QS Top 20）工程硕士背景，聚焦 AI 实用落地、双语物理与 STEM 项目式学习。兼具客户经理与销售沟通经验，能把技术、课程产品与教育理念讲清楚、卖明白、落到课堂里。",
  about:
    "我不是传统意义上只讲公式和概念的理工科老师。新世代的孩子需要跟上时代最前沿，理解 AI、工程、语言表达和自我成长之间的关系；我希望帮助他们接触最先进的技术，建立清晰的思维、稳定的内核和表达自己的能力，最终成为自己真正想成为的人。",
  aboutTags: [
    "UNSW 工程硕士",
    "AI+STEM 课程研发",
    "课程产品沟通",
    "青少年个性化陪伴"
  ],
  audience: "学校招聘方",
  primaryAction: {
    label: "关注我的更新",
    href: "#follow"
  },
  secondaryAction: {
    label: "联系合作",
    href: "mailto:1367879380@qq.com"
  },
  signal: ["AI 实用落地", "双语物理", "STEM 项目式学习"],
  proof: [
    {
      value: "UNSW",
      label: "QS Top 20 工程硕士背景"
    },
    {
      value: "AI x IoT",
      label: "智能安全风险研究经历"
    },
    {
      value: "Product",
      label: "课程产品拆解与转化能力"
    },
    {
      value: "Empathy",
      label: "青少年沟通与长期陪伴经验"
    }
  ] satisfies ProofPoint[],
  socials: [
    {
      label: "小红书",
      handle: "烛",
      href: "#"
    },
    {
      label: "公众号",
      handle: "烛",
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
      title: "AI 实用落地",
      description:
        "从真实问题出发，带学生经历数据采集、工具选择、模型判断和结果表达，让 AI 变成可被理解、可被操作、可被展示的解决方案。",
      meta: "AI Application",
      variant: "normal"
    },
    {
      title: "课程产品转化",
      description:
        "结合客户经理与销售沟通经验，参与课程产品研发、卖点梳理、家校沟通和理念讲解，把复杂课程讲成清晰、可信、可选择的教育价值。",
      meta: "Product / Sales",
      variant: "normal"
    },
    {
      title: "工程底层逻辑",
      description:
        "用土木工程和力学背景连接桥梁、城市、海岸与安全场景，让物理公式不只停留在纸面，而是成为理解真实世界的工具。",
      meta: "UNSW Civil Engineering",
      variant: "normal"
    },
    {
      title: "双语理科表达",
      description:
        "熟悉全英文工程学习环境，能把中英文物理术语、工程表达和课堂讲解节奏打通，帮助学生建立国际课程表达能力。",
      meta: "Bilingual Physics",
      variant: "normal"
    },
    {
      title: "课程研发视角",
      description:
        "从学校课程目标、学生接受度和展示成果倒推设计，拆解产品架构、优势短板与落地路径，形成可复用的 STEM 课程原型。",
      meta: "Curriculum Design",
      variant: "normal"
    }
  ] satisfies BentoCard[],
  teachingPhilosophy: [
    {
      title: "用真实问题点燃抽象公式",
      description:
        "用桥梁、海岸、城市安全等真实工程场景切入，让伯努利方程、线性回归、受力分析不再停留在黑板上。"
    },
    {
      title: "用 AI 实用落地训练建模思维",
      description:
        "让学生从数据采集、特征识别到模型决策，理解 AI 不是魔法，而是一套可被拆解、验证、迭代的逻辑系统。"
    },
    {
      title: "用双语表达连接国际课堂",
      description:
        "把英文理科术语、工程表达和中文理解路径打通，帮助学生建立面向国际课程与未来学术表达的语言基础。"
    },
    {
      title: "用个性沟通建立学习信任",
      description:
        "长期关注青少年情绪支持与心理陪伴，善于依据孩子性格差异调整沟通方式，先建立安全感，再找到学习突破口。"
    }
  ] satisfies ContentBlock[],
  signatureLessons: [
    {
      title: "AI 安全风险侦测实验",
      description:
        "以施工安全监测为案例，引导学生理解传感器数据、计算机视觉识别与 AI 决策闭环。",
      tags: ["IoT", "CNN / YOLO", "Risk Sensing"]
    },
    {
      title: "从海岸泳池学力学与回归",
      description:
        "用 Bondi Icebergs 海岸灾害评估案例，把波浪载荷、岸线退缩与线性回归转化为探究课题。",
      tags: ["Physics", "Regression", "Critical Thinking"]
    },
    {
      title: "AI 工具到建模思维",
      description:
        "从 AI 工具使用、数据处理和问题拆解开始，逐步过渡到简单分类、模型评估与真实场景应用。",
      tags: ["AI Tools", "Data", "Model Thinking"]
    },
    {
      title: "课程产品拆解工作坊",
      description:
        "把一个 AI+理科课程从用户需求、核心卖点、学习路径、展示成果到家长沟通话术完整拆开，训练学生和团队的产品思维。",
      tags: ["Product Thinking", "Communication", "AI Education"]
    },
    {
      title: "国学与心理韧性课堂",
      description:
        "以中国传统文化中的修身、立志、慎独与责任感为线索，引导学生建立道德底线、情绪觉察和自我约束能力，把心理健康教育融入日常表达与选择。",
      tags: ["国学修身", "心理韧性", "价值观引导"]
    },
    {
      title: "个性化沟通陪伴计划",
      description:
        "依据孩子不同性格、压力来源和表达方式，设计点对点沟通路径，帮助学生从空虚、焦虑或低动力状态中找到可执行的小目标和正反馈。",
      tags: ["Student Care", "Mentoring", "Growth Mindset"]
    }
  ] satisfies ContentBlock[],
  schoolValue: [
    {
      title: "能讲",
      description:
        "具备双语理科表达能力，能把复杂概念讲得清楚、有结构、有课堂节奏。"
    },
    {
      title: "能研",
      description:
        "有 AI+工程研究经历，能参与 STEM、AI 校本课程和探究式项目研发。"
    },
    {
      title: "能沟通",
      description:
        "做过销售和客户经理，懂需求识别、信任建立、理念讲解与异议处理，可迁移到家校沟通、招生咨询与课程说明。"
    },
    {
      title: "能组织",
      description:
        "曾任院学生会学术部部长，具备活动策划、课堂管理和学生组织能力。"
    },
    {
      title: "能剖析",
      description:
        "擅长深层拆解产品架构、优势短板与落地路径，能参与课程产品研发、销售材料打磨和教学方案迭代。"
    },
    {
      title: "能陪伴",
      description:
        "有传统文化内容副业和青少年沟通经验，擅长倾听、心理开导与长期陪伴，能根据不同性格做点对点引导。"
    }
  ] satisfies ContentBlock[]
};
