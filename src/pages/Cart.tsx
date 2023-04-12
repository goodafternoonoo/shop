import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from '../store/userSlice';

interface cartType {
    id: number;
    name: string;
    count: number;
}

export default function Cart() {
    const { cart, user }: any = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            <h6>
                {user.name} {user.age}의 장바구니
            </h6>
            <Button onClick={() => dispatch(increase(10))}>버튼</Button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item: cartType, i: number) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>
                                <Button
                                    onClick={() => dispatch(changeName())}
                                ></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}
