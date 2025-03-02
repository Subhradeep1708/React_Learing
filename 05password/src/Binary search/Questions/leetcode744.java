package Questions;

public class leetcode744 {
    public static void main(String[] args) {
        
        char [] letters = {"c","f","j"} ;

    }
    static int ceilingSearch(char[] arr, char target) {

        // if the target element is greater than the greatest element of the array
        if (target > arr[arr.length - 1]) {
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

        return start;
    }
}
