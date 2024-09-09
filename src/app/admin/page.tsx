import insertSeeds from "@/libs/db/seeds";
import {
  Accordion,
  AccordionActions,
  AccordionSummary,
  Button,
} from "@mui/material";

const AdminPage = () => {
  return (
    <main sx={{ p: 2 }}>
      <div>
        <Accordion expanded component="form" action={insertSeeds}>
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
