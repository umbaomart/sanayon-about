export const sampleArray = () => {

  let elementData = document.querySelectorAll('.cardList02__item');
  let numberData = [5, 6, 7, 9, 3, 2];
  let contactData = [
    {
      id: 1,
      name: 'Mark',
      number: 123,
    },
    {
      id: 2,
      name: 'Max',
      number: 2345,
    },
  ];

  // Foreach Demo
  let elementList = elementData.forEach((x) => {
    console.log(x);
  });
  console.log(elementList)

  // Filter Demo
  let newlist = numberData.filter((number) => {
    return number > 5;
  });
  console.log(newlist);

  // Map Demo
  let contactList = contactData.map((element) => {
    return `${element.name} ${element.number}`;
  });
  console.log(contactList);
};
