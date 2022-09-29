import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CartListDetail from "./CartListDetail";
import { Link } from "react-router-dom";

const Cart = ({ cart, totalPriceCart, cartClear }) => {
  return (
    <>
      <div className="bg-light rounded-4 p-2">
        <Typography variant="h5" component="h2" className="text-center mt-2 mb-2">
          Detalle de tu carrito
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <>
                  <TableCell></TableCell>
                  <TableCell>Producto</TableCell>
                  <TableCell>Precio Unitario</TableCell>
                  <TableCell>Precio Total</TableCell>
                  <TableCell></TableCell>
                </>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => {
                return <CartListDetail key={item.id} item={item} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="bg-dark p-2 text-center">
        <TableContainer>
          <Typography variant="h5" className="mb-3 mt-3 text-white">
            Importe Total: ${totalPriceCart}
          </Typography>
          <Link to="/checkout">
            <Button variant="contained" color="success">
              Confirmar Compra
            </Button>
          </Link>
          <Button color="error" startIcon={<DeleteIcon />} onClick={cartClear}>
            Vaciar Carrito
          </Button>
        </TableContainer>
      </div>
    </>
  );
};

export default Cart;
