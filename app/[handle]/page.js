import { notFound } from "next/navigation";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
export default async function Page({ params }) {
    const { handle } = await params;
    
 
  const client = await clientPromise;
  const db = client.db("bittree")
  const collection = db.collection("links")

  
  const item = await collection.findOne({ handle:handle})
  if(!item) return notFound();

    const item1 = {
        "_id": {
            "$oid": "68efe6a00ac9cdb799f3d70e"
        },
        "links": [
            {
                "link": "https://www.youtube.com/",
                "linktext": "qeqe"
            },
            {
                "link": "q",
                "linktext": "q"
            }
        ],
        "handle": "dbz",
        "pic": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
    };

    return (
        <div className="flex min-h-screen bg-purple-600 justify-center items-start py-10">
            {item && <div className="photo flex flex-col justify-center items-center gap-4 ">
                <img
                    src={item.pic}
                    alt={item.handle}
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <span className="font-bold text-xl text-white mt-3">@{item.handle}</span>
                <span className="desc text-center">{item.desc} </span>
                <div className="links flex flex-col gap-4 mt-6 w-full max-w-xs">
                    {item.links.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <div
                                className="bg-white flex justify-center min-w-96 backdrop-blur-md border border-white/30 text-black text-center py-3 rounded-full font-semibold text-lg tracking-wide shadow-md hover:bg-white/30 hover:shadow-[0_0_15px_#fff] transition duration-300 cursor-pointer"
                            >
                                {item.linktext}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>}
        </div>
    );
}
