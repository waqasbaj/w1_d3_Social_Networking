var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function whofollows()
{
  for (word in data)
  {
    console.log(data[word].name + " follows");

    for (x=0; x<data[word].follows.length; x++)
    {
      for (y=0; y<Object.keys(data).length; y++)
      {
        if (data[word].follows[x] === tostring(word))
        {
            console.log("hello");


        }
    }



  }

}

whofollows();