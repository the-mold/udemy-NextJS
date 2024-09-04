import PostCreateFrom from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";

interface TopicShowProps {
  params: {
    slug: string
  }
}

export default function TopicShowPage({params}: TopicShowProps) {
  const {slug} = params;
  return <div className="grid grid-cols-4 gap-4 p-4">
    <div className="col-span-3">
      <h1 className="text-2xl mb-2">
        {slug}
      </h1>
      <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
    </div>
    <div>
      <PostCreateFrom slug={slug} />
    </div>
  </div>
}
