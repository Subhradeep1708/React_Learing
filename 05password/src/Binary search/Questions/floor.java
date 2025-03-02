package Questions;

public class floor {
    public static void main(String[] args) {
        
    
    int[] array = { 2, 4, 6, 12, 34, 54, 67 };
        int target = 500;
        int ans = floorSearch(array, target);
        System.out.println(ans);

    }

  

    // the same biinary search code copy pasted just returning the end  
    //  RETURN THE INDEX GREATER NUMBER >= TARGET


        static int floorSearch(int[] arr, int target) {

            //  if the target element is smaller than the smallest element of the array
        if (target < arr[0]) {
            return -1;
        }
            int start = 0;
            int end = (arr.length - 1);
    
            while (end >= start) {
                int mid = start + (end - start) / 2;
                if (target == arr[mid]) {
                    return mid;
                } else if (target > arr[mid]) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
    
            return arr[end];
        }
}
