// Purpose: To display all the blogs in the website
const blogs = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/oojus-ad231.appspot.com/o/blog1.jpeg?alt=media&token=a3da6dca-50bb-4f1c-84d5-99eb79c4c39d",
      title: "The Importance of Kashi in Hinduism",
      description: "Uncovering the motivation and vision of tech leaders towards AI Copilots",
      date: "Novermber 12, 2024",
      authorName: "Pooja Sharma",
      authorImage:
        "https://assets-global.website-files.com/657844934fa1ee60fa5129c5/65a1851200eb6a6636e17980_abc.webp",
    },
    {
      image:
        "https://assets-global.website-files.com/657844934fa1ee60fa5129c5/65a4d9ef54fed3eb89d702df_Image-p-800.webp",
      title: "The Importance of Kashi in Hinduism",
      description: "Uncovering the motivation and vision of tech leaders towards AI Copilots",
      date: "Novermber 12, 2024",
      authorName: "Pooja Sharma",
      authorImage:
        "https://assets-global.website-files.com/657844934fa1ee60fa5129c5/65a1851200eb6a6636e17980_abc.webp",
    },
    {
      image:
        "https://assets-global.website-files.com/657844934fa1ee60fa5129c5/65a4d9ef54fed3eb89d702df_Image-p-800.webp",
      title: "The Importance of Kashi in Hinduism",
      description: "Uncovering the motivation and vision of tech leaders towards AI Copilots",
      date: "Novermber 12, 2024",
      authorName: "Pooja Sharma",
      authorImage:
        "https://assets-global.website-files.com/657844934fa1ee60fa5129c5/65a1851200eb6a6636e17980_abc.webp",
    },
  ];
  
  
export default function handler(req, res) {
    res.status(200).json(blogs)
  }
  