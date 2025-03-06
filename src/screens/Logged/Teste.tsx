import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// Definindo o tipo para os itens da lista
type Item = {
  id: string;
  description: string;
  value: string;
  date: string;
};

export default function App() {
  // Inicializando o estado com o tipo adequado
  const [data, setData] = useState<Item[]>([]);  // Agora TypeScript sabe que `data` é um array de `Item`
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  // Função para adicionar um novo item
  const addItem = () => {
    if (description && value && date) {
      const newItem: Item = {
        id: Math.random().toString(),
        description,
        value,
        date,
      };
      setData([...data, newItem]);
      setDescription('');
      setValue('');
      setDate('');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  // Função para renderizar cada item da lista
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>Data: {item.date}</Text>
      <Text style={styles.text}>Descrição: {item.description}</Text>
      <Text style={styles.text}>Valor: R$ {item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Formulário para adicionar novos itens */}
      <TextInput
        style={styles.input}
        placeholder="Data (dd/mm/aaaa)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />
      <Button title="Adicionar" onPress={addItem} />

      {/* Lista de itens */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  },
});
