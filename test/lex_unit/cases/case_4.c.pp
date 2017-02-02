

int factorial(int n){
    // Terminal condition of recursion.
    /*
    If n is equal to 1 then no need to go any deeper level of recursion.
    Rather return 1. Because factorial of 1 is 1.
    */
    if(n == 1) return 1;
    else return n*factorial(n-1);
}

int main(){
    int a;
    /*** Print a message
	 * A message to inform user what to provide
	 **/
    printf("Input number:\n");
	/**
	 * Take input
	 */
    scanf("%d", &a);
    printf("Factorial of given number is: %d\n", factorial(a));
    return 0;
}
