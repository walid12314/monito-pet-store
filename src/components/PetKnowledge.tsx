import Image from "next/image";
import Link from "next/link";

export interface BlogArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  excerptClampClass: string;
}

export const PET_KNOWLEDGE_DATA: BlogArticle[] = [
  {
    id: "blog-pomeranian",
    category: "Pet knowledge",
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    excerpt:
      "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
    image: "/images/blog/blog-1-pomeranian.png",
    slug: "what-is-a-pomeranian-how-to-identify-pomeranian-dogs",
    excerptClampClass: "line-clamp-3",
  },
  {
    id: "blog-dog-diet",
    category: "Pet knowledge",
    title: "Dog Diet You Need To Know",
    excerpt:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
    image: "/images/blog/blog-2-dog-diet.png",
    slug: "dog-diet-you-need-to-know",
    excerptClampClass: "line-clamp-4",
  },
  {
    id: "blog-dog-bites-furniture",
    category: "Pet knowledge",
    title: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    excerpt:
      "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
    image: "/images/blog/blog-3-dog-bite-furniture.png",
    slug: "why-dogs-bite-and-destroy-furniture-and-how-to-prevent-it-effectively",
    excerptClampClass: "line-clamp-3",
  },
];

export function PetKnowledge() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Useful Pet Knowledge",
    description: "Helpful pet care guides, diet tips, and breed identification articles from Monito.",
    numberOfItems: PET_KNOWLEDGE_DATA.length,
    itemListElement: PET_KNOWLEDGE_DATA.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt,
        articleSection: article.category,
        image: `https://monito.example.com${article.image}`,
      },
    })),
  };

  return (
    <section
      aria-labelledby="pet-knowledge-heading"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[60px] pb-[60px]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      {/* Section Header Row (y: 3504 -> 3566, 28px gap to cards) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-[28px]">
        {/* Frame 18 (31:278): 2px vertical gap */}
        <div className="flex flex-col gap-[2px]">
          <p className="text-[16px] leading-[24px] font-medium text-[#000000]">
            You already know ?
          </p>
          <h2
            id="pet-knowledge-heading"
            className="text-[24px] leading-[36px] font-bold text-[#003459] capitalize"
          >
            Useful Pet Knowledge
          </h2>
        </div>

        {/* Button M (31:337): 151x44, 1.5px border #003459, rounded-[57px], px-[28px] py-[12px] gap-[8px] */}
        <Link
          href="/blog"
          className="hidden sm:inline-flex items-center justify-center whitespace-nowrap min-w-[151px] h-[44px] px-[28px] py-[12px] gap-[8px] rounded-[57px] border-[1.5px] border-[#003459] text-[14px] leading-[20px] font-medium text-[#003459] hover:bg-[#003459]/5 transition-colors shrink-0"
        >
          <span>View more</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-[20px] h-[20px] shrink-0"
          >
            <path
              d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
              stroke="#003459"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* 3-Card Blog Grid: 3 columns × 380x424 cards, 20px gap */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] justify-items-center">
        {PET_KNOWLEDGE_DATA.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col w-full max-w-[380px] lg:h-[424px] bg-[#FFFFFF] rounded-[12px] p-[8px] gap-[8px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_32px_-2px_rgba(0,0,0,0.12)] transition-shadow"
          >
            {/* Article Image Frame: 364x240, rounded-[10px] */}
            <Link
              href={`/blog/${article.slug}`}
              className="relative block w-full h-[240px] lg:w-[364px] lg:h-[240px] rounded-[10px] overflow-hidden bg-[#F5F5F5] shrink-0"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 364px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            {/* Card Body: 364x160, p-[8px], gap-[10px] */}
            <div className="flex flex-col items-start w-full lg:h-[160px] p-[8px] gap-[10px]">
              {/* Category Pill Badge: px-[10px] py-[2px], rounded-[28px], bg-[#00A7E7] */}
              <span className="inline-flex items-center justify-center px-[10px] py-[2px] rounded-[28px] bg-[#00A7E7] text-[10px] leading-[16px] font-bold text-[#FDFDFD] shrink-0">
                {article.category}
              </span>

              {/* Text Stack: width 348px, height 114px, gap-[6px] */}
              <div className="flex flex-col w-full lg:h-[114px] gap-[6px] overflow-hidden">
                <h3 className="text-[16px] leading-[24px] font-bold text-[#00171F]">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-[#003459] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p
                  className={`text-[14px] leading-[20px] font-normal text-[#242B33] ${article.excerptClampClass}`}
                >
                  {article.excerpt}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile-only View More button */}
      <div className="mt-5 sm:hidden">
        <Link
          href="/blog"
          className="flex items-center justify-center w-full h-[44px] px-[28px] py-[12px] gap-[8px] rounded-[57px] border-[1.5px] border-[#003459] text-[14px] leading-[20px] font-medium text-[#003459]"
        >
          <span>View more</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-[20px] h-[20px]"
          >
            <path
              d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
              stroke="#003459"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default PetKnowledge;

