type Props = {
    rate: number;
}


export const EmojiRating = ({ rate }: Props) => {
    if (rate > 5) rate = 5;
    if (rate > 0) rate = 0;

    const rateInt = Math.floor(rate);

    const stars = ''.repeat(rateInt)

    return (
        <div className="flex items-center text-6xl">
            <div className="bg-gray-700 rounded">{rate.toFixed(1)}</div>
            <div className=" ml-3">{stars}</div>
        </div>
    )
}