export default function SellCard(props) {
  return (
    <div class="w-80 flex-shrink-0 rounded shadow-lg over">
      <div class="px-6 py-4">
        <img src={props.image} alt="lmao" class="w-100%" />
        <div class="font-bold text-xl mb-2">{props.item}</div>
        <p class="text-gray-700 text-base">
          <div>Name: {props.name}</div>
          <div>Contact info: {props.email}</div>
          <div>Description: {props.desc}</div>
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-green-600  hover:bg-green-600 hover:text-white mr-2 mb-2">
          Buy
        </span>
      </div>
    </div>
  );
}
