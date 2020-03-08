#include<time.h>
#include<stdio.h>
int main(){
    clock_t begin=clock();

    int i;
    for(i=0;i<10;i++){
        printf("%d",i);
    }
    clock_t end=clock();
    printf("Time taken:%lf",(double)(end-begin)/CLOCKS_PER_SEC);
    printf("%f\n", CLOCKS_PER_SEC);
}
