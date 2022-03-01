// Next Router
import { useRouter } from "next/router";

// Styles
import SEditPage from "./styles";

export default function EditPage() {
  const router = useRouter();

  const { cpf } = router.query;

  return (
    <SEditPage>
      <h1>Hello World</h1>
    </SEditPage>
  );
}
