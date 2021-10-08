interface ListProps {
    items: Array<{
        id: number;
        title: string;
    }>;
    handleRemove: any;
}

export default function List({ items, handleRemove }: ListProps) {
    return (
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <button
                            type="button"
                            onClick={() => handleRemove(item.id)}
                        >
                            X
                        </button>{' '}
                        {item.title}
                    </li>
                );
            })}
        </ul>
    );
}
