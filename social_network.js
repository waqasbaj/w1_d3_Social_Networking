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
      var keyFollows = data[word].follows[x];
      console.log(data[keyFollows].name);

    }

  }

}



function whofollowsmost()
{
  var y = "";
  var z = 0;

  for (word in data)
  {
     var x = data[word].follows.length;
     {
      if(x > z)
      {
        y = data[word].name;
        z = x;
      }
     }
  }

  console.log(y +" has most friends");

}



function whoisfollowed()
{
  var obj={};

  for(word in data)
  {
    for(x=0; x<data[word].follows.length; x++)
    {

      if(obj[data[word].follows[x]] === undefined)
      {
        obj[data[word].follows[x]] = 1;
      }
      else
      {
        obj[data[word].follows[x]]++;
      }

    }

  }

  var y = "";
  var z = 0;

  for (word in obj)
  {
     var x = obj[word];
     {
      if(x > z)
      {
        y = word;
        z = x;
      }
     }
  }

  console.log(data[y].name +" has most friends");

}



function whoisfollowedover30()
{
  var obj={};

  for(word in data)
  {
    if(data[word].age >30)
    {
      for(x=0; x<data[word].follows.length; x++)
      {


        if(obj[data[word].follows[x]] === undefined)
        {
          obj[data[word].follows[x]] = 1;
        }
        else
        {
          obj[data[word].follows[x]]++;
        }

      }
    }

  }

  var y = "";
  var z = 0;

  for (word in obj)
  {
     var x = obj[word];
     {
      if(x > z)
      {
        y = word;
        z = x;
      }
     }
  }

  console.log(data[y].name +" has most followers over 30");

}



function whofollowsmostover30()
{
  var y = "";
  var z = 0;

  for (word in data)
  {
     var x = data[word].follows.length;
     {

      for(g=0; g<data[word].follows.length; g++)
      {
        if(data[data[word].follows[g]].age < 30)
        {
          x--;
        }
      }


        if(x > z)
        {
        y = data[word].name;
        z = x;
      }
     }
  }

  console.log(y +" follows most people over 30");

}

whofollowsmostover30();


// List those who follow someone that doesn't follow them back

//   initialise an empty array
//   make a loop of for (x in y) to iterate through the keys of data
//   make a subloop of to compare the









