import { Facebook } from "../components/Facebook";
import { FacebookProvider } from "../contexts/FacebookContext";

export default function Home() {
  return (
    <FacebookProvider>
      <Facebook />
    </FacebookProvider>
  )
}
