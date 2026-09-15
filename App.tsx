import { Text, View } from "react-native";

export default function App() {
  // Nome do usuário que será exibido na saudação
  const userName = "Emilly";

  // Lista de filmes
  const dataList = [
    {
      name: "Call Of Duty",
      price: 100.0,
      category: "Action",
      onSale: true,
    },
    {
      name: "Fortnite",
      price: 50.0,
      category: "Battle Royale",
      onSale: false,
    },
    {
      name: "GTA 6",
      price: 499.99,
      category: "RPG",
      onSale: true,
    },
  ];

  return (
    <View>
      {/* Exibe a saudação utilizando interpolação */}
      <Text>Olá, {userName}!</Text>

      {/* Percorre a lista utilizando o map */}
      {dataList.map((item, index) => (
        <View key={index}>
          {/* Exibe o nome do filme */}
          <Text>{item.name}</Text>

          {/* Exibe a categoria do filme */}
          <Text>{item.category}</Text>

          {/* Muda a cor do preço dependendo de onSale */}
          <Text style={{ color: item.onSale ? "green" : "gray" }}>
            R$ {item.price}
          </Text>

          {/* Exibe OFERTA somente quando o filme está em promoção */}
          {item.onSale ? <Text>OFERTA</Text> : null}
        </View>
      ))}
    </View>
  );
}
