import insertSeeds from "@/libs/db/seeds";
import {
  Accordion,
  AccordionActions,
  AccordionSummary,
  Button,
  Toolbar,
} from "@mui/material";

const AdminPage = () => {
  return (
    <main sx={{ p: 2 }}>
      <Toolbar />
      <div>
        <Accordion component="form" action={insertSeeds}>
          <AccordionSummary>Insert Seeds</AccordionSummary>
          <AccordionActions>
            <Button type="submit" variant="contained">
              Seed
            </Button>
          </AccordionActions>
        </Accordion>
      </div>
    </main>
  );
};

export default AdminPage;
