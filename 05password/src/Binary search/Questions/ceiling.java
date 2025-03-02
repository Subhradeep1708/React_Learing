package Questions;

public class ceiling {
    public static void main(String[] args) {
        int[] array = { 2, 4, 6, 12, 34, 54, 67 };
        int target = 1;
        int ans = ceilingSearch(array, target);
        System.out.println(ans);

    }

    // the same binary search code copy pasted just returning the start
    // RETURN THE INDEX SMALLEST NUMBER >= TARGET
    static int ceilingSearch(int[] arr, int target) {

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