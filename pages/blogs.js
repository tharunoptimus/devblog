const blogs = require("./database.json");
import BlogCard from "../components/blogCard";

export default function sendProps () {

    let things = blogs.map((blog) => {
        return (
            <BlogCard key={blog.id} props={blog} />
        );
    })

    return (
        <div className="blogs-container">
            {things}

            <style jsx>{`
                .blogs-container {
                    display: grid;
                    grid-gap: 2px;
                    place-items: center;
                    align-items: stretch;
                    width: 90%;
                    margin: 0 auto;
                }
                
                @media (min-width:320px)  { .blogs-container { grid-template-columns: 1fr; } }
                @media (min-width:481px)  { .blogs-container { grid-template-columns: 1fr 1fr 1fr; } }
                @media (min-width:641px)  { .blogs-container { grid-template-columns: 1fr 1fr 1fr; } }
                @media (min-width:961px)  { .blogs-container { grid-template-columns: 1fr 1fr 1fr; }  }
                @media (min-width:1025px) { .blogs-container { grid-template-columns: 1fr 1fr 1fr 1fr; }  }
                @media (min-width:1281px) { .blogs-container { grid-template-columns: 1fr 1fr 1fr 1fr; } }
                
                
            `}</style>
        </div>
    )

    
}