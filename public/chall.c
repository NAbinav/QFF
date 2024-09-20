#include <stdio.h>
#include <string.h>

void transform(char *input) {
    for (int i = 0; i < strlen(input); i++) {
        for (int j=0;j<256;j++){

        input[i] ^= ; // brute-fore the key
        }
    }
}

int main() {
    char flag[] = "vitctf{Fake_flag}";
    transform(flag);
    printf("Obfuscated flag: %s\n", flag); 
    return 0;
}
