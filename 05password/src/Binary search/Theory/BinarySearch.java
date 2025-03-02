package Theory;
public class BinarySearch {
    public static void main(String[] args) {

        int[] array = { 67, 54, 34, 12, 6, 4, 2 };
        int target = 2;
        // int ans = binarySearch(array, target);
        int ans2 = orderAgnosticBS(array, target);
        // System.out.println(ans);
        System.out.println(ans2);

    }

    static int binarySearch(int[] arr, int target) {
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

        // If target is not found, return -1
        return -1;
    }

    // ORDER AGNOSTIC BINARY SEARCH ( determines whether the array given is in ascending or descending order then do binary search accordingly )

    static int orderAgnosticBS(int[] arr, int target) {
        int start = 0;
        int end = (arr.length - 1);

        // find whether the array is in ascending or descending order
        boolean isAsc;
        if (arr[start] < arr[end]) {
            isAsc = true;
        } else {
            isAsc = false;
        }

        while (end >= start) {
            int mid = start + (end - start) / 2;

            if (arr[mid] == target) {
                return mid;
            }

            if (isAsc) {
                if (target > arr[mid]) {
                    start = mid + 1;
                } else if (target < arr[mid]) {
                    end = mid - 1;
                }
            } else {
                if (target < arr[mid]) {
                    start = mid + 1;
                } else if (target > arr[mid]) {
                    end = mid - 1;
                }
            }
        }
        return -1;
    }
}
