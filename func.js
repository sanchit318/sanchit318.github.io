// Array Generation
let values = [];
var size=120;
var c=0;
let brickWidth = 5;


function resetButtonClick(){
    setup();
    cleanContainerDiv();
    resetArray();
}

function cleanContainerDiv(){
    var containerDiv = document.getElementsByClassName("container")[0];
    containerDiv.innerHTML = "" ;
}

function setup(){
    values.length = size; // Array size or number of bricks
}
function resetArray(){
    for(var i=0; i < values.length; i++){
        values[i] =Math.floor(Math.random() * 400 + 5);
    }
    buildArray(values);
}
function createBrick(height){

    var tempSpan = document.createElement("span");
    tempSpan.style.height = height + "px";
    tempSpan.style.width = brickWidth + "px";
    //alert(height);
    tempSpan.style.display = "inline-block";
    tempSpan.style.background = "purple";
    tempSpan.style.marginLeft = "2px";
    tempSpan.style.marginRight = "2px";

    return tempSpan;
}
function buildArray(array){
    var containerDiv = document.getElementsByClassName("container")[0];
    containerDiv.innerHTML = "" ;
    for(var i=0; i< array.length; i++){
        containerDiv.appendChild(createBrick(array[i]));
    }
}


// Sorting
async function BubbleSort(){
    for(var i=0; i< values.length; i++){
        for(var j=0; j< values.length -i -1; j++){
            var a = values[j];
            var b = values[j+1];
            if(a>b)
            {
                swap(values, j, j+1);
               SortBuiltArray(values);
                await waitforme(0);
            }
        }
        SortBuiltArray(values);
        await waitforme(0);
    }
}


async function SelectionSort(){
    for(var i=0; i< values.length-1; i++){
        var index = i;
        for(var j=i+1; j< values.length; j++){
            if(values[index]>values[j])
            {
              index=j;
            }
        }
        if(values[index]!=values[i])
        swap(values,i,index);
        SortBuiltArray(values);
        await waitforme(0);
    }
}

async function InsertionSort(){
    for(var i=1; i< values.length; i++){
      var index=i,j=index-1;
        while(j>=0)
        {
          if(values[j]>values[index])
          {
            swap(values,index,j);
            SortBuiltArray(values);
            await waitforme(0);
            index=j;
            j--;
          }
          else {
            break;
          }
        }


    }
}

async function MergeSort(lo,hi)
{
  //alert("values= "+values);
  //alert("lo="+lo);
  //alert("hi="+hi);
  if(lo==hi) //lo==hi
  {
    return;
  }
  var mid;
  if((lo+hi)%2==1)
  mid=(lo+hi-1)/2;
  else
  mid=(lo+hi)/2;

MergeSort(lo,mid);
//alert("array["+lo+'-'+mid+"] sorted");
MergeSort(mid+1,hi);
//var m=mid+1;
//alert("array["+m+'-'+hi+"] sorted");
SortBuiltArray(values);
await waitforme(0);

//merging two sorted arrays into one sorted array
var arr1=[],arr2=[];
for(var i=0;i<mid-lo+1;++i)
{
  arr1[i]=values[lo+i];
}
for(var i=0;i<hi-mid;++i)
{
  arr2[i]=values[mid+1+i];
}

var cnt=lo,index1=0,index2=0;
while(cnt-lo<hi-lo+1)
{
  if((index1<arr1.length) && (index2<arr2.length))
  {
      if(arr1[index1]<arr2[index2])
      {
        values[cnt]=arr1[index1];
        index1++;
      }
      else
      {
        values[cnt]=arr2[index2];
        index2++;
      }

      cnt++;
  }
  else
  {
    while(index1<arr1.length)
    {
      values[cnt]=arr1[index1];

      index1++;
      cnt++;
    }
    while(index2<arr2.length)
    {
      values[cnt]=arr2[index2];

      index2++;
      cnt++;
    }
  }


}



//alert("values= "+values);
SortBuiltArray(values);
await waitforme(0);
return;

}





function SortBuiltArray(array){
    var containerDiv = document.getElementsByClassName("container")[0];

//alert(values);
    for(var i=0; i< array.length; i++){
        var currentBrick = containerDiv.getElementsByTagName('span')[i];
        currentBrick.style.height = array[i] + "px";
    }
    sleep(2); //waits for 100 ms
}


function swap(arr, a, b){
  //  sleep(10);
   var temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function waitforme(ms)  {
    return new Promise( resolve => { setTimeout(resolve, ms); });
}
