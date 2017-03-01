#include <stdio.h>
#include <time.h>

int main()
{
    int i;
    clock_t time1, time2;
    time1= clock();
    for (i=1; i<=100000; i++);
    time2=clock();
    printf("%f seconds\n",(float)(time2-time1)/CLOCKS_PER_SEC);

}
