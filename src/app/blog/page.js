import { fetchBlogList } from "lib/api/blogs";
import Navbar from "app/components/Navbar";
import ContactForm from "app/components/ContactForm";
import "../styles/styleblog.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons";

const dummyImage = "/alivaa-dummy-image.png";

function stripHtml(html) {
  if (!html) return "";

  // Decode a limited set of common HTML entities
  const entityMap = {
    '&nbsp;': ' ',
    '&rsquo;': "'",
    '&lsquo;': "'",
    '&rdquo;': '"',
    '&ldquo;': '"',
    '&mdash;': '—',
    '&ndash;': '–',
    '&amp;': '&',
    '&quot;': '"',
    '&#39;': "'",
    '&lt;': '<',
    '&gt;': '>'
  };

  // Replace HTML entities with their character equivalents
  let decoded = html.replace(/&[a-zA-Z0-9#]+;/g, (match) => entityMap[match] || '');

  // Remove all HTML tags
  decoded = decoded.replace(/<[^>]+>/g, '');

  // Collapse multiple spaces, newlines, tabs, etc. into a single space
  return decoded.replace(/\s+/g, ' ').trim();
}

export async function generateMetadata() {
  return {
    title: "Alivaa Hotels Blog",
    description: "Read the latest articles from Alivaa Hotels",
    openGraph: {
      title: "Alivaa Hotels Blog",
      description: "Read the latest articles from Alivaa Hotels",
    },
    alternates: {
      canonical: "/blog",
    },
  };
}

export default async function BlogPage() {
  try {
    const blogs = await fetchBlogList();

    return (
      <>
        <section className="home-hdr-hght">
          <Navbar></Navbar>
        </section>

        <section className="banner-section m-1">
          <img
            src="/images/blog/blog-main.png"
            alt="Hotels in Gurgaon"
            className="banner-img pt-0"
          />
        </section>

        <section className="blog-global-things">
          <div className="container">
            <div className="blog-list">
              <h1 className="m-3 inner-hd text-center">Alivaa Hotels Blog</h1>
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    {blogs.map((blog) => (
                      <div key={blog.id} className="col-md-6 mb-3">
                        <div className="blog-card-list">
                          <Image
                            src={blog.image_url || dummyImage}
                            height={350}
                            width={500}
                            alt={blog.title}
                            className="blog-list-image"
                          />
                          <div className="blog-list-content-box">
                            <Link
                              href={`/blog/${blog.urlslug}`}
                              className="blog-list-title-link"
                            >
                              <h5 className="blog-list-title">{blog.title}</h5>
                            </Link>
                            {/* <p className="blog-category-and-date">{blog.post_date} - <i>{blog.category_name}</i></p> */}
                            <p className="blog-category-and-date">
                              {blog.post_date} -{" "}
                              <i>
                                <Link
                                  href={`/${blog.category_slug}`}
                                  className="blog-category-link"
                                >
                                  {blog.category_name}
                                </Link>
                              </i>
                            </p>

                            {/* <p dangerouslySetInnerHTML={{ __html: blog.description.slice(0, 150) + '...' }} className="blog-list-desc" /> */}

                            <p className="blog-list-desc">
                              {stripHtml(blog.description).slice(0, 130)}...
                            </p>
                            <Link
                              href={`/blog/${blog.urlslug}`}
                              className="blog-list-link"
                            >
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="blog-list-sidebar-box-fixed">
                      <ContactForm />
                      <div className="blog-list-sidebar">
                        <ul className="blog-list-sidebar-ul">
                          {blogs.map((blog) => (
                          <li key={blog.id} className="blog-list-sidebar-li"> 
                            <FontAwesomeIcon icon={faDotCircle} />
                            <Link href={`/blog/${blog.urlslug}`} className="blog-list-link">{blog.title}</Link>
                          </li>
                          ))}
                        </ul>
                      </div>
                    </div>
				  
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    return <div>Error fetching blogs: {error.message}</div>;
  }
}