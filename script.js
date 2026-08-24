const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = []
	let cur_chunk = []
	let cur_sum = 0

	for(let i=0;i<arr.length;i++){
		if(cur_sum+arr[i]>n){
			res.push(cur_chunk)
			cur_chunk=[arr[i]]
			cur_sum=arr[i]
		}
		else{
			cur_chunk.push(arr[i])
			cur_sum=cur_sum+arr[i]
			
		}
	}

	if(cur_chunk.length>0){
		res.push(cur_chunk)
	}
	return res
	
	
};

const n = Number(prompt("Enter n: "));
console.log(divide,arr,n)



