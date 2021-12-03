console.log('cs50 notes bruv');
// evalution when using the = sign like setting a variable the code read from right to left there for run that code/function ect
// -on the right first this way the value can be stored in the variable (no becuase you call elsewhere does it now have to run will do in evaluation regardless)



//terminal commands
// dr for directory aka the folder or location in pc you are currently in 
// cd to change directory
// rm to remove file / rmdr to remove folder also known as directory
// mkdr to make a directory
// mv to move the file in or out of a location also used to remane file or folder (moving to new place in memory)
// and within the directory different ways to move like level up, down ect this is dont with single . or .. to move out (ect..)
// and running in c . mean current directory and .. parent directory



// learning with c from the start think is great as set great foundation becuase of how much it required the programmer to do have to be precise and truely give instruction step by step
//  -with c you can literaly control the amount of memory of bit will be utilized for any given operation/function ect...


// printf("%i\n, x + y");  - c is written interestingly where here printf function to print in console that make it visible to use and will only print whats in ""
//  -now the %i represent being a place holder for an integer value, \n that's just for new line 
//      -the , to seperate the arguments or input then x + y the operation wanted where the %i will be replaced by the result of said operation 



// computers are limitated by thier ram or bit ex. using 32 bit to calc a 64 bit float the program will start to estimate as it physically cannot produce said number (resulting in some funky numbers)

//lab1

//the c language used place holders where you denote with a % sign that mean placeholder where value will go but also the data type s-strin c-char i-integer ect...
//  look like %s or %i  for strin and integer for example 

//also learned to compile code in c use clang filename - then can also choose the outputs name/location (the output beign source converted to machine code)
//   do the remane by   clang -o chosenname fileselectedname.c  that will return output to the location or name

//also c is a strick language where you have to deneto the data type of every value if in/output

// #include < cs50.h >
// #include < stdio.h >

//     int main(void)

// // collection and storing users name
// {
//     string name = get_string("what is your name?\n");
//     // greeting user by name
//     printf("hello, %s\n", name);
// }

//ex.#2
//farily simple just different syntax then js right
// did notice with the while do loops interesting  as get the do part does also the while parameter but how does it know to go back to the spicified do code
//  could be that computer just reads them together and thats why (just repeart till parameted is met)
// also was thinking how i would achieve that in js

// --------------------------------------------------------------------------------------------------------------------
// Lecture 2 ARRAYS 
//learned that in the make function provided whats really happenig what explained prior
// recompiles source code to a machine code that can thenbe executed as well as choosing thay binary files location and name with 
// -  clang -o chosenname fileselectedname.c  / clang compiles/ -o being / chosename called a command line argument/input/

//also when we add any #include <file.h> often we also like any other libary we will need to reference where the libary can be found 
// the header simple tells cm that it uses it not where to find it 
//      - if needed to link we do in the ternimal with  /  clang -o hello hello.c -lcs50 
//          -there we recompile now telling cm to include this code when runnig file  the -l  is link then cs50 beign the libary linking 

//compiling steps: 
// preprocessing(takes code looks for #include to grab code from it to difine said prototype / function that exist within it )
// compliling (take c code convert to assemble code[computer friendly code] )
// assembly (takes assembly code and converts to machine code)
// linking (now takes all machine code of any files or libary and puts them all together to only big thing/code)
//  -typically any libaries or compilers are already in machine code usually only your individual code is converted and linked(would be insufficient to have to complile those every time )
//      -also like other libaries all imported not only what you utilize

//debugging - 
// the print is great tool as will provide you the value/output ect..\
// gdb gnu degugers (check them out ive never used) they allow you to run the code step by step

//contol + c to get out of programs 

// different way to write code but like in js you can run a functino prior to its declaration same thing in c 
//  -what iteresting is its solution, we reference whats known as the prototype (aka pretty much means the functions declaration, first line)
//step through, into , over 
// check typos, conditions, datatypes, outputs, logic, ect...
// talk through you code to solve

// each data types has a specified number of memory they take up

// hardrive where files are stored, ram where file stored when open (both with their own max memory/ bytes)

// so with int like js if we utilize one data type with other vie operation/ect.. it will auto/allow you to have return in specied datatype 
// - in c for exmple expectiong a float but working with integer if we divide them all by a float 1.0 now will allow it and no bug (noice)

//array we now these data structure contain list of values
// arrays in see look alot like object and also have to denote the number of actual values contained within (int vername[#ofcontained])
//  -basically and object with key as variable name[0] through whatevern # then = value just like reg objects

// c also has a const written in ALL CAPS

//in c when you want to an array as imput write with empty brackets[] then its dynamic any # of values

//c also like js has the return at end of funtions

// also in c we always has to specify the type everywhere even when its input/argument for a function

// I notice that in c there isnt any real deffirence when declaring a varible and function like in js we clearly write functino (well as lease how i chose to do it)
//  -the only way stand out is it having () and the argument otherwise no different 
//      -specified the datatype resutl wanted, var name, argument(s)/input, {then action }   [actually looking at it not so dif from js just as expected written little different]

// in c the computer has to know we must input how many values the array will contain (only time we dont is when is argument for function there we empty beackers)

// also in c when have funtion with nothing as argument you must add void in the (void) like so -says do not add anything here

// in c you can 'cast' a data type to a variable or value  string x = (int) '3' like soo (seperate a char type is a single byte)
// also in c when dealing with single character/written king use 'single' and more than one use "double"

// c actually dosent have a datatype of string (only via the cs50)

// string are just arrays(array of characters)  never thought about it like that noice!

//in every string (array of character) there is included an extra to the end denoting the end of the string that how cm know length [NULL]

// c allows us to touch change anything withing the computers memory (powerful and dangerous) 
//      -ex string hi and insted of pulling values[0 and 1 we do 440] well hi dosent have a 440 value, well c will still provide you with what is store at said location regardless
//          -and if wanted to can change, ect.. to that portion of memory usually wouldnt have access to 
//          -c allows you to pull, touch, see, change value beyond specified variable and values

// loop to end of string inplace of say i < string.length in c checks for the actual char value like so string[i] != '\0'  (run as long as value does not = char \0 and becuase char goes in '' even if is tech 2 character)
// lul nevermind there is function for this but good to know anyways called strlen(stringselected)   in file called #include <string.h>

// aim to elimanate any redundency like in loop having to ask for length of string every go around 
//  -instead have the strlen set to var that you then use that to make you condition (and that var can be declared in loop parameters or outside)

// never really though about utilizing character or letter in parameters as they are tech number value so valid to use 
//  -ex. if (n >= 'a' && n <= 'z') to find if lowercase char it works and valid straight forward
//      -also learned that all char/letter are 32 apart in number value so to go from a to A you -32 noice
//  and also ofcourse there are libaries that contain functions that can do this for you this case toupper/lower ect..

// main(void) main - being the program itself and void denoting nothing is passed it 
//  -if however do/want to pass in ex. int main (int argc, string argv[])  -- would pull argv[1] as the varname is stored in the 0 index
//      -no when i run the program in the terminal i can add input ex. ./hello whateverInput
//  and that will get passed through the rest of my code where the input/variable is referenced (say code just print input then whereverInput will leterally get printed)
//      -note that this input is added in the terminal in a command and not after program runs

// why does main return a int - a number can denote an occurance if network issue, if nothing wrong , ect... like the 404 error page ect...

// crypto is just keys/algorithims like a mason cypher

// ------------------------------------------------------------------------------------
// lecture #3 - algorithms

// computer when looking at array can only view only 1 location/value at a time 
// we get into searching 
// runnig time referes to how long a algrithm takes to return output

// BIG O - big O of ect (on the order of --)
//  O(n) big o of n
//  O(log^2n) big o of log base 2 n
// in big O we focuse on the domination factor  what gonna make the biggest difference over large scale
// common o formulas:
//      -O(n^2)  -while this be any value ^2 thus taking more steps more run time [aka not as efficient]
//      -O(n log n)
//      -O(n)  -replesent a constant value where n is is the constae whatever value that may be
//      -O(log n)
//      -O(1)  -replesent a constant value
// note big O focuses on the max scenerion how many steps time would this algorithm take [aka the worst case scenerio] 

// While the Omega or Ω focuses on the least steps possible [aka the best case scenario]
// note both measuring the efficiency of an algorigthm

// **when searching one by one by one ect.. is whats called ('linear search')
// *when searching the difference is made when are array is sorted prior to our search 
// -----
// in c to write array when now value dont have to denote number of value/writen values in {}
// in c everything is writen in like one big funtion where at end on poirtoin of functionality we return a value for the 
//  ----purpose the know where thing aren't working or got messed up (testing code aka returns anything other then 0 we know didint run as intended)

// in c we compare string using function libary array[i], 'string' and if equals will return a 0 [so that what we check for that 0 is returned]
// in c only 0 is considered false no other number wether positive or negative number

// in c we can creat are own data types completely denote its name and structure values it will hold [pretty darn cool and powerful]
// in numbers when dont plan to do expressions keep it as string type can always change later if needed 

// how we creat our own datatype in c [this solves issue of combuninng related daya or data we want to keep tomgether ect...]
// we want to build our code for the long term and defends its self from human error
// typefer strucr       -syntax to denote new datastructure
// {
// string name      -data stored
// string number    -data stored
//  }
// person;              -the new datastrucyres name


// person people[2];        -setting making structure and denoting the avlues contained
// people[0].name = 'brian';
// people[0].number = '210-345-5432';
// people[1].name = 'rayn';
// people[1].number = '210-867-5542';

// its like objects in JS how we pull the selected data from the object using the key/name

// in c you can creat your own hearder files that hold your writen code like funtions/algorithm/datastructures 
//  ---the you can reference and link like a libary to know use without having to rewrite any of that 
//      (just like all other libary links references)

// so the goal becomes how can we sort the array to our benefit
// there will always be trade off where depending as to whats important will determine how much effort we want to put into our search algorith

//  selection sort (get the smalles value then compares put in place and continue the process reapeating till all index are fulled)



//      -O(n^2)         -also known as 'selection sort'
//      -O(n log n)     -
//      -O(n)           -known as 'linear serch'
//      -O(log n)       -know as 'binary search'
//      -O(1)           -


// interesting never though about but sorting value using value pairs [interesting]
//  --super cool it bubble the larges numbver to end correct spot but also in doing this is also moving the smallest to the front
//    --its like its sorting both ways at the same time pretty darn cool (felt similar to selectin sort but just didnt have to go through so much of the whole array as much )

// with selection sort even in the best case scenario everything already being in order the algorithm would still check rest
//  --of array for a lower number for every index (so even in the best scenerio take bit of steps)
//  while same case for bubble sort does much better in best case scenerio where only compare pair and move forward
//      -so not only matters whats and how its beign compared but how and when that checked makes a difference
//  or add in selection if no swaps quit so prevent all next check as are not needed (so both are pretty much the same in efficiency)

// we do not want an n^2 is a no no not good and can always do better

// recurssion - ability of function to call itself (study this more dont completely  get it yet)
// need a base case to know when to quit calling self
// its a funtion refering to its self and only in the bottom case do we hard code that instance

// sorting and merging  merg sort very good for big stuff 
// in all types you pay a price wether that be in more run time, in more upfront effort and time, or in space (ex. merge sort require another temp array to move values back and forth from)
//  with that merge that memory can be huge as you'll need 2x the memomry space

// if O and Ω are the same can short name using theta to represent that 'Θ'  kinda just like a zero

// merge sort is great for large data set however takes lot more memory space 

// ---------------------------------------------------------------------------------------------------------------------------------
// Lecture #4 - Memory (stidy further)

// hexidecimal is a count of base 16 (from 1-9 then a-f)
//  -gives us 16 individual characters to represent a digit (and the count is the same as counting in binary)
//  1 hexidecimal digit cancan be represent by 4 bit at a time (4 binary digits)

// whats heppends when you store a variable and value in the computer?
//  -both get placed inside out somputers memory (inside an address / location)
//      -in c we can use & and * / the & prefix tells computer to return the variable/value location and the * tells computer to go into or to that address
//          -[not to be confused with the and operator in our boolean statements]  (above one gets the address the other goes to it)
// very interesting that you can literaly pull the literal address of the varialble you've set from the computers memory

// Pointers - a variable type that set to point to a selected varaibles address (syntax :  int *var = &var) [will take up 8 bits total]
//  why would we want to store the address of var instead of just pulling it value of the var
// whats the point of creaating a pointer to "point" to an adreess holding a value and not just go strain to the value itself
//      -you can manipulate the values within memory address via its address pointer and not its actual value location (one in the same almost)

// when printing value like of a varible ect.. we'd use the place holder syntax then the varible we want to print : like so  printf("%s\n, var");
//  -now there a similar syntax we can use that will instead of printing value will print it as a pointer aka the var/values address
//      -printf("%p\n, var");  -syntax is the same only difference is %p instead of %s to denote return as pointer aka the value/vars address in memory
//  while place/address in memmory may change for things like string that are multiple character together their location will always be that together even though the core location may change
// we only need to know the first address location of the first character because we'll always know where strings end 

// string is the same as char *  (there is no inheriet datatype called string)
// becuse the returned address is a number wwe can then do math with that like priting going to address + 1 , 2 aka the next characters in the string ect.. 
// char's are integers and vise versa

// in c  inheriently we are pulling string address in memory instead of the value stored within that address (so we must go into that address then get values and compare those)

// function malloc() or memory allocations (used when asking computer for memory space to ex. copy over a string or other value)
// with c just seems you have to be very presice and deliberate with all you code more than other languague feel like 
// we check for NULL meanning there is no address to prevent a memory error (attemping to store something when there is no memory)
// *malloc and free function go hand in hand (always use togother) as one allocates memory for us free then frees that memory up to be use(after are use of said memory is done)

// valgrind - checks for memory bugs (command line check of selected file)
// in c you must set value of varuble (pretty strigt forward right) becuase unlike other languages c will return whats called a garbage value
//  -garbage value being a value stored at a memory location you are accessing but never set yourself aka a random address/value

// swapping values - 3 cups (when swapping value literal we only change the copies used and not the actual values withing original addresses)
//      -so to swap we would have to use pointers and access wihtin the address
//  -we have to access the address then value withing can simply copy one var to another and value will not be from original address and value

// NOTE: c used called 'prototypes' at top of program to reference a function defined lated in file
//      -needed only when you call/use a funtion before you have defined it in your program (how might this translate in javascript)
//          -which are written as the start of the function everything before the {curly braces}

// stack is where memory is reused 
// stack overflow - calling function so much touch memory you shouldn't and crash program
// heap overflow - 

// in c datatype of FILE exsist the literal file you select
//  -can creat and manipulate files within you program(interesting and cool)
//  -working on and in files from the original/or one program where we can copy one file's context to anothers
// 

// ------------------------------------------------------------------------------------------------------------------------------------------
// Lecture #5 Data Structures

// when storing in memory say like an array because we have to decide the size of array proir its will only take that amount of space in memory 
// --where now if we wanted to icrease its size or add another value we run into a problem where in memory in bytes that array datasctructue in memory
// ---may be right up against another datastructue like a string or else where if we add to it at it current location now we are also effectin 
// --- the nearing datastructure effecting the neigboring data *(we would have to either make new array sized array with new address that way can be the length desired)

// definition of array means it must be contigouis aka in predetemined order values back to back to back
// would like to understand big o and omega bit better

// commonly used in c to achieve powerful datastructure 
// struct   - allows us to define our own datastructures
// .        - allows us to go into a datastructure like pulling from an object in JS
// *        - allows use to go to an address  (usually combined to look like an arrow -> .*)

// Linking List - solves problems withing an arrays *(allows you to add to the array or datastructure)
// dynamic datastructure that can grow and shrink without having to copy all original data over to a new structure
// --allows in memeory to still store values but unlike array dont have to be back to back in memory instead are stored where every theres room avalible
// ---as long as we have a way to recall the data and thats achieved with meta data (stores the value and pointer to the next element/value)
// ----take up bit more (2x) space but in every value in another byte there is stored the address of the next value in the array 
// -----this way we can always find the next value (get value then to next addresss -> get value then to next address regarless of where located in memory)
// its leaving a trail for computer to follow and put together values wanted *(how would i implement this in javascript)
// collection of nodes connected via pointers

// its prons and cons where yes it uses more memory but think if instead we copied everytime to add to arary would actually use more memoty and procesin power cuase we would need to 2x the memory of the thing used (O^2) and that would not do well with a lot of data
// where i guess linkied uses the memeory permanatly while the copy could only be temp but again believe its the dynamic propertie and easy of use that makes it worth it 
// trade off between space and time

// typedef struct node      -defining structure (added node here so we can refrende it within the values of the structure) (this is like a prototype to give c a hint that this will exist somewhere down the line)
// {
//     int number;          - 
//     struct node *next;   - to point to the next value (note the type is copy of the structure referencing itself) 
//  }
// node;                    - defined the structures name

// how do we build a linked list?
// we use the malloc() function we can repeatedly allocate memory like 2 bytes for this value 2 for this one ect... and do this as many time needed
// --cool little work around
// one issue related to linked list is you can not use binary search on it the price payed for dynamism
// 

// node *n = malloc(sizeof(node));
// if (n != NULL)
// {
//      (* n).number = 1; is the same thing as :  n->number = 1;   - 'and this goes to the alocate memory address and put in the value 1'
// }

// list = n;

// node *n = malloc(sizeof(node));
// if (n != NULL)
// {
//     n->number = 2;
//     n->next = NULL;
// }

// to search through = O(n) can take up to as made elements exist withing
// to add to = O(1) will always be constant number of steps

// realloc fuction reallocation memory of and already existing array
// realloc(listSelected, sizeWanted * size(int));
// realloc will copy the also malloc to the new realloc


// typedef struct node  "creates the datastructure that also act kinda like a data type"
// {
//     int number;             -"we denot the element that will be stored within" int type key of number
//     struct node *next;      -"element thats store this case " node type (address pointer) key of next
// }
// node;

// int main(void)
// {
//     // List of size 0. We initialize the value to NULL explicitly, so there's
//     // no garbage value for our list variable
//     node * list = NULL;      -"type node sets the address of list to NULL" which is var we created here refered to late as just list (this is the link)
//                                  -list being the reference to the whole linked list

//     // Allocate memory for a node, n
//     node * n = malloc(sizeof(node));
//     if (n == NULL) {     -"checking all is well"
//         return 1;
//     }

//     // Set the value and pointer in our node         -"here is where we are actually setting the node values"
//     n -> number = 1;                                 -"here the nuber in node to 1"
//     n -> next = NULL;                                -"and here the next(address) value to NULL"

//     // Add node n by pointing list to it, since we only have one node so far
//     list = n;                                        -"now making 'n' containing both number and address, the address list is pointing to"

// though dynamic not the most effective and to add can be good deal of work specially when choosing to add from middle end begin ect...


// Trees - (gives you dynamims and properties of an array (can do alrithmatic on) [preseved property to do binary search])
// child note will always be to left and right left less than and right greater then in value (recursive datatstructure)
// takes more memory and insertion take more (insertion Ologn if kept balanced) types of trees

// typedef struct node          -create structure
// {
//     int number;              -value 
//     struct node * left;      -poiter to value less than
//     struct node * right;     -pointer to value greater than
// }
// node;                        -name of structure defined



// Hash tables - (an array of linked list)
// hash function (takes input and return an int to determine its location in the array)
// allows us to break dowm the searching into fewwer or smaller data set to search 
//  -it may take extra step to get to correct array but one there only looking through that one array and not all 26 of them  


// Trie (tree of an array) (tree of array of pointers to other nodes)
// gives big O of 1 constant time
// price is memory the more effeciet shorter the run time seems usually uses more and more memory
// theory efficiency is deffirent than real world efficiency

// building data structure based on what youll be using it for right 
// building structure to fit the problem at hand (makes sense right lol)
// like building a queue, ect..
// related properties like FIFO(first in first our) LIFO(last in first out)
// dictionary abstract datatype key and value

// stacks and queues 



// ----------------------------------------------------------------------------------------------------------------------
// Lecture 6 Python

// a language build on the lower level languagee like c making things simpler and easier
// - in all aspects  defining veriables, datastructures, functions, ect...
// in python just like all other languages we can import libarys and functionalities
// cleaner and less syntax like the ;{} ect..
// each language will have its own veriations like python the booleans and Capitalized True instead of true, datatypes, ect....

// some python datastructures:
// list, tuple, dict, range, set

// in the high level(abastraction) languages newer or more modern, isn't much focus on the memory managment, or copies value for an array ect.. 

// unlike c where code in compilied to machine code python and other high level languages use an interpreter to translate to machine
// -paying a price in preformance (while in c explicitly telling each thing computer to do even the compiling ect.. in python all this is being done for you when you run your program [there is no compiling done by us explicitly ect..])
// -c we have code -> complile = machine code  in python we have code -> interpreter = machine code
// always trade off of reasources (in language tech ect... whats the best solution for the problem at hand)
// and for all languages there is always documentation to refer to

// you can specify the functions used with the libary name in calling the function

// in python like other's solve issue of initializing function before defined we define function (with or without argument) -helper functions 
// --then call that function withing another this time overarching functino (would contain multiple function calls) 
//  ---common to like in c also inpythong to define a overarching function/program      def main(): ect..

// in pythonfor a while loop we dont use a condition but instead invoke an infinite loop of bat then break out of it

// def main():      -overarching function/program
// i = int(input())
// print(i)

// def get_positive_int():
//  while True:
//      n = get_int("Positive Integer: ")
//      if n > 0:
//         break
//  return n

// main()       -calling of overarching function

// NOTE: in python indentations are very important and strict your program must be properly indented otherwise will not work as intended

// scope like in other's variable defined within the function only exist withing the functino unless previously defined outside 
// in python there is not interger overflow aka you can count as high as you want no limitation
// python is filled with some very cool fetures

// argv stuff dont completely get it [like runnig file like a function that takes arguments]

// dict datastructure is made of key value pait (like JS objects) uses brackets [keysAsIndex]

// crazy how many different libaries and functionalities are avalible for free online 
// --from qrcode creation, litereal face recognition, speach recognition ect.....(pretty much for anything)

// --------------------------------------------------------------------------------------------------------------------------
// Lecutre 7 - SQL

// data storing and collecting
// flat file data base -referce to simply design (like a csv  and other related) (not most efficient or best with querie [have to search linearly])
// -can only store static data cant use formulas on them (unless applyed to it)

// solving problems with programming start always start simple to more complex
// when pulling data can do with index but good practive to instead always you their corresponding keys

// so what he showing is becuase the csv or flat-file dosent have any functionality he opens it in python wrapping it in a reader function
// -so that now wrapped in reader we can work more dynamicly with it 
// dict reader assumes the first row in csv containes your titles 
// to have only unique value aka no repeats we use sets
// in python there is a function called sorted that will literaly sort your data without us applying a specified algorithm for it(default will sort by key)
// - now if you need data in a specified arrangment then you will have to implement that (we can pass in a funtion to sorted to denote how we want to sort)

// Relational Data Based -programs where you store your data ()
// storing not in spreadsheets but in tables which probide more functionality and dynamism
// SQL - Structured Query Language
// sql can be used along side other languages like python making them more powerful
// -there are multiple version of sql mysql sql lite as well as others like oracle ect...
// with SQL data is stored in a bianary file 
// sQL allows us to access and manipulate data / to interact with the relatinal data base
// turn csv to RDB - import flat file to database or use code that manually inserts the data to database 

// all RDB support 4 operation (CRUD)
// create / (insert)
// read  / (select)
// update
// delete

// any sql keyword capitalize

//  CREATE TABLE nameForTable (nameForClomun type, ...) - syntax to create a new table in 
//  SELECT nameOfColumn FROM tableName - allows us to select the row of data wanted (can select multiple data/comlumn just seperated by ,comma)
// * column selected will provide all data/columns in file

// SQL comes with build in function to more easily produce data wanted without so much worry on writing the code to produce said data
// AVG - 
// COUNT -
// DISTINCT - returns a set only unique values
// LOWER - 
// MAX - find max value
// MIN  -find min value
// UPPER ... and more  -uppercase everything


// WHERE - this condition is true 
// LIKE  - contains related value not case sensitive (operator % allows for other characters at end or start of inputed value)
// ORDER BY -  
// LIMIT - 
// GROUP BY ... and more - 
// INSERT INTO tableName (columnName, ...) VALUES(valuesName,...); - just like (keys/rowtitles, ) VALUES(correspondingValues/youWantToInsert)


// use python to write code to import data to sql data based
// rdb - find relation between data and normalize/aka eliminate redundency

// Shows                    Genres
// -id                       -show_id
// -title                    -genre

// SQL's 5 main datatypes: (will vary by system)
// BLOB -binary large object
// INTEGER  
// NUMBERIC -like number but not (like hour, year ect...)
// REAL
// TEXT

// 'primary key' uniquily identifies each row / or title in this example
// not the reference of that id in another table that identifies thier link is called a 'foriegn key'

// need way to connect out python code to sql - google this

// creating tables in desired structure
// db.execute("CREATE TABLE shows (id INTEGER, title TEXT, PRIMARY KEY(id))")
// db.execute("CREATE TABLE genres (show_id INTEGER, genre TEXT, FOREIGN KEY(show_id) REFERENCES shows(id))")

// and like other languages we can nest functios/or this case queres

// eliminate all redundence by using whats called a 'join table' who's purpose is the join or reference one table to the other [using just foreign keys]
// -thus connecting multiple data tables

// INDEX sql function creates a b-tree
// -you can create indexes for indivudual data making then more efficient then joining them todether creating a large database with great efficiency
// JOIN sql function allows us to do just that join tables together (and this becomes more powerful with nested querie in manipulation data and creating an new table out of that data)

// tracaction and commit function in sql solve the problem of multiple of the same input being sumbmitted at the same time 
// -ex of updating a value they will summit and update but while doing that will lock out any of the same input to be submitted
// -only once the first request is submitted and complete now it will unlock and submit the next request and so forth

// sql makes very simple and easy to pull and sort data, manipulate or really just get the data you wanted (gives you all the function you might need and in plain english pretty much)
// NOTE: learn how to access and manipulate file with code like program writen

// ----------------------------------------------------------------------------------------------------------------------------------
// Lecture 8 -html, css, javascript

// now when get into the actual interenet and the graphical interefaces we use everyday does (html, css, and javascript come in) [previously only went over command line programming]
// with internet thing had to be standardized 2 protocold use are TCP/IP (/internet protocol=how computers intereact with eachother)
// TCP tranmision control protocol - determines what services to provide with PORT # also delivers data retransmite if data lost (decides what goes out side the envelopes)
// IP internet protocol - how computers intereact with one another
// DNS domain network service - tranlatign wha we know as domain names like youtube.com to the ip adress
// HTTP htpertext tranfer protocol - GET request (what goes inside the envelopes)
// the data is sent/transferd in envelops/aka packets
// varing codes like 200 or 404 301 represent different types of request fulfilled or not

// HTML hypertext markup language (tags-open and close, nested tags, attributes="",) - build like a tree with parent and child elements
// CSS cascading style sheets ()
//  -selector: value;
// Javascript is a client side programming language
//  -unlike the other languages we have previously used like c,sql,python which are server side programming languages

// DOM coumment object model 
// problem with callig function or selecting something before its been read by computer
// -for evenlistener can add the listener to form in this case but only when  the whole DOM content has been loaded 
// <script>

//     document.addEventListener('DOMContentLoaded', function() {
//         document.querySelector('form').addEventListener('submit', function () {
//             let name = document.querySelector('#name').value;
//             alert('hello, ' + name);
//         });
//     });

// </script>
// JSON javascript object notation 
// NOTE: we can write languages withing languages by first creating functionality/algorithms wanted then just using syntax of other as if we were writing it on its own
// -when this gets returned or result passed in after we proceed with action writing in the other language used


// -------------------------------------------------------------------------------------------------------------------------------------
// Lecture 9 - Flask

// constanly listend for ttp request 
// flask is a framework and libary that reads user input request and routes user to the corresponding file/page
// -Libary meaning predefined funtions we can untilize
// -Framework meaning specified way for the structure of our code and files
// --like so for file needed: application.py, requirements.txt, static, templates

// MVC - model(technique,techknolege, ect...), controller(the logic, serverside code), view(what the user sees)

// in flask we  must first define the route ex.("/")  like when we see the site / then whatever page your on contact, checkout ect...
// like so -----
// from flask import Flask, render_template, request        *import the flask libary , references the folder containig all html pages to pull from , request function to return page wanted

// app = Flask(__name__)        *

// @app.route("/")          *(@)in py allows us to use outside function with py function then denote route comes after the /
// def index():             *defining function names index
// return render_template("index.html", name=request.args.get("name"))   *default page, name of diff page/userinput, argument, get request from server, the page matching this name/input



// flack allows us to return the specified page wanted by the user aka whichever html page requested
// the way you can use a template and then set dynamic variables in in html where depending on input or code 
// --we can change what is rendered in the in the html and user display taking place of that variable (ver stays but its value is dynamic) reminds me of shopify liquid

// The python code with inported flask libary:
// @app.route("/")
// def index():
// return render_template("index.html")


// @app.route("/greet")
// def greet():
// return render_template("greet.html", name = request.args.get("name", "world"))   
// ---*in py the name(before =) is a parametere being passed into function of render_template
// ---*while the name(after = ) is in the get function is the http parameter that we grab from the url
// -----python code where all flack route of url are defined as to what will be pased in and thier respective routes to corresponding html render pages/templates

// and the corresponding html for above python/flask code:
// ----This is the index default page
// < !DOCTYPE html >

//     <html lang="en">
//         <head>
//             <title>hello</title>
//         </head>
//         <body>
//             <form action="/greet" method="get">
//                 <input name="name" type="text">
//                     <input type="submit">
//         </form>
//     </body>
// </html>
// -----the index page collects input that in then submited the the greet page as route where that then input is used in its rendering

// and the correspondign greet html page:
// < !DOCTYPE html >

//     <html lang="en">
//         <head>
//             <title>hello</title>
//         </head>
//         <body>
//             hello, {{ name }}            *referce to the correspoinding ver being passed in the py for render_template function
//         </body>
//     </html>
// -----here page routed to after form submited on the index page where here the var of {{name}} will become the input previouly provided
// ------having one page/form in this case/program to submit data into another to the be used to render an element in the html page dynamicly

// when using the get funtion the url will show data provided in the actuall  url bar (info leaks)
// -we solve this by instead of using the get function we use the 'POST' function

// in regards to flack and routes they will always defulat to method of get unless specified otherwise ex. route("/", method=["POST"])
// --and we have to get the parameters from a diff var (not the url aka request.args) but (request.form) [this way pulls from form and not url]
// *request.args is for get request / pulls from url
// *request.form is for post request / pulls from packet /we use post when gathering any personal, cridical information

// where previouly we could not share html between pages aka creating whole new html file for every page even if the contain almost all same elements
// -with flask allows us to not share the html between pages(this way we eleminate redundency of creating while new file wiht same elements) [or any web programming framework]
// Flask framework utilizes the Jinja programming language *** (look pretty much like liquid) we see again the {% syntax %}

// The layout html file that contains sort of template or repeately use html to be used else where
// -this is the layout.html file seperate of the other but still in same tamplates folder
// < !DOCTYPE html >

//     <html lang="en">
//         <head>
//             <title>hello</title>
//         </head>
//         <body>
//             {% block body %}{% endblock %}       *new sytax that tell where to imput the code/var provided by the other html files
//         </body>
//     </html>


// This become the new index.html file notice the new syntax and code with layout and blocks
// {% extends "layout.html" %}

// {% block body %}

// <form action="/greet" method="post">
//     <input autocomplete="off" autofocus name="name" placeholder="Name" type="text">
//         <input type="submit">
//     </form>

//         {% endblock %}
// -----the block denoting what will be passed through to the layout page to be render all together on the predetermined placement and order

// This becomes the greet.html page
// {% extends "layout.html" %}

// {% block body %}         *and in the block the body portion is simply a var name could name it anything just body here cuase thats our content

// hello, {{ name }}

// {% endblock %}
// -----similar to index used same layout and block only differ the code withing the block (that will be passed into the layout file)
// ---{% block %} - allows us to pass in content from other files 
// --this advantage of a web application

// Reusing Route's
// @app.route("/", methods = ["GET", "POST"])       *passing in both 
// def index():
// if request.method == "POST":
//     return render_template("greet.html", name = request.form.get("name", "world"))
// return render_template("index.html")
// -----then checking with logic which type of request should be submitted and thier respective route

// so here for the regjister example its not enoght to check for null in input field but also that user is only allowed to submit data 
// -that we permit (aka not allowing ability to user to change client side info and submit that) give only ability to submit from our options nothing more

// like so here with everything hardcoded in the html (can create check for all them like this where for this input would have to be one of them but there a better solution)
// {% extends "layout.html" %}
// 
// {% block body %}
//     <h1>Register</h1>
// 
//     <form action="/register" method="post">
// 
//         <input autocomplete="off" autofocus name="name" placeholder="Name" type="text">
//         <select name="sport">
//             <option disabled selected value="">Sport</option>
//             <option value="Dodgeball">Dodgeball</option>
//             <option value="Flag Football">Flag Football</option>
//             <option value="Soccer">Soccer</option>
//             <option value="Volleyball">Volleyball</option>
//             <option value="Ultimate Frisbee">Ultimate Frisbee</option>
//         </select>
//         <input type="submit" value="Register">
// 
//     </form>
// {% endblock %}
// -----in this case user could change on client side and still sumbmit something that was not an option (we dont want that)
// ----we solve this by instead of hard coding it in html we create a global var in the py to then past into the html wit flask

// Global var in py:
// SPORTS = [
// "Dodgeball",
//     "Flag Football",
//     "Soccer",
//     "Volleyball",
//     "Ultimate Frisbee"
// ]

// Here we edit the existing template of sport.html
// <select name="sport">                                        *here still same select drop down elemnet in html
//     <option disabled selected value="">Sport</option>        *same sport default desabled
//     {% for sport in sports %}                                *now here we use logic to loop through the array of predifined Global var SPORTS
//     <option value="{{ sport }}">{{ sport }}</option>         *same option html layout but repaced with a var of sport (each item in that array/will creat one for each item )
//     {% endfor %}                                             *the this just tell program where the loop ends
// </select>                                                
// -----so now options will be created dynamicly for each item in array 

// With that can inplement new logic:
// if not request.form.get("name") or request.form.get("sport") not in SPORTS:
// -1st parameter check if that name in not null
// -2nd parameter chack if the sport submitted also exist wihtin the Global array of SPORTS
// And only when both return true will it submit and route to the success.htlm
// if false then route to failure page

// Storing Data:
// creates another Global var this time an empty py dict/aka js object to store our inputs
// REGISTRANTS = {} will be stored in key value pairs

// creating parameter to provide feed back to the user aka what needs to be fixed ect...\:
// name = request.form.get("name")
// if not name:
//     return render_template("error.html", message = "Missing name")

// sport = request.form.get("sport")
// if not sport:
//     return render_template("error.html", message = "Missing sport")
// if sport not in SPORTS:
// return render_template("error.html", message = "Invalid sport")

// this working alongside the new error tamplate which is very simple:
// {% extends "layout.html" %}

// {% block body %}
// { { message } }
// {% endblock %}
// -----message beign here literally what's writen in the pymessage value for each specified case

// 
// REGISTRANTS[name] = sport

// return redirect("/registrants")

// @app.route("/registrants")
// def registrants():
// return render_template("registrants.html", registrants = REGISTRANTS)

// And the correspoing layout to display that stored data dynamicaly

// {% extends "layout.html" %}

// {% block body %}
//     <h1>Registrants</h1>
//     <table>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Sport</th>
//             </tr>
//         </thead>
//         <tbody>
//             {% for name in registrants %}
//                 <tr>
//                     <td>{{ name }}</td>
//                     <td>{{ registrants[name] }}</td>
//                 </tr>
//             {% endfor %}
//         </tbody>
//     </table>
// {% endblock %}
// -----intereting how you can use flask code withing html and the html withing that nested falsk code ect... super cool and powerful
// now this creats a tables of all the registrations submitted diplays row for each submition wihth name and sport selected
// ---this however come with the issue if server goes down or offline all that data will be lost (aka why we use csv file or database slq ect...)

// and right now the only way to see the registered page (showing whos registanred) is to actually register self 
//  -so we want to be able to view that page without having to register
//  we solve this with or register route to furst goes through check if not met then goes to error page 
// -however if nothing wrong then we will redirect at the end of that route to the registrants page to view them (that way dont need to create a completly new route)

// solving data we solve be now passing data into sql database to prevernt loosing it

// -Created database containig the id(identifire), the nanme , and sport:
// db = SQL("sqlite:///froshims.db")       *databased defined as global var(seperate form below just wanted to add to see it)
//      db.execute("INSERT INTO registrants (name, sport) VALUES(?, ?)", name, sport)    *added to the register route just before redirect
// -----sql code is inserting into the previously created table in sql named "registrants" (is the parameter we will be passing in)
// -that were also named in sql priour as 'name' and 'sport'
// ----more sql (?,?) just tell it place holder for input, then what actual values/this case dict to pull the actual values from (aka dict in py that hold the pair that already iterats through it not sure if that matter in this case as think psing in 1 at time)
// ---so we have to parameters, where values will be pulled from and where they'll be stored(this all right before we route to table page showing who registerd)

// -Then for the registreants page itself:
// @app.route("/registrants")
// def registrants():
//      registrants = db.execute("SELECT * FROM registrants")   *redifines the previos global var now = same values but pulled from elsewhere(gives us acces to all registrants)
//      return render_template("registrants.html", registrants = registrants) *just the reder of page that we get (template and var share same name)

// with this new selecting we need to afjust our html template (from just name and registrants[name aka the sport] to now pulling from database)
// wiht the registrant.key ect...: like pulling from the object in JS

// {% for registrant in registrants %}
// <tr>
//     <td>{{ registrant.name }}</td>
//     <td>{{ registrant.sport }}</td>
//     <td>
//         <form action="/deregister" method="post">
//             <input name="id" type="hidden" value="{{ registrant.id }}">
//                 <input type="submit" value="Deregister">
//                 </form>
//             </td>
//         </tr>
//         {% endfor %}

// own database, templates dynamicly generated ect.. pretty kick ass

// some flask runction i want to mention that were used here plus more:
// from flask import Flask, render_template, request
// from flask_mail import Mail, Message

// app = Flask(__name__)
// app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_DEFAULT_SENDER")
// app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
// app.config["MAIL_PORT"] = 587
// app.config["MAIL_SERVER"] = "smtp.gmail.com"
// app.config["MAIL_USE_TLS"] = True
// app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
// mail = Mail(app)
// allows us to dynamicly generate emails and send

// NOTE: the for any private data is not explicitly added but added as a stored variable else where this way never submit that type of data over web or make avalible known ect.,...
// -never hard code any private data in your programs (looks like he does that with a function 'getenv'[not sure that ties to other file ect...])

// we changed name to email in the html template also included this in py to set what msg would be sent:
// message = Message("You are registered!", recipients = [email])   *Message here beign the imported feature set to var in nest line used
// mail.send(message)

//     Sessions and Cookies:
// Sessions - allows the web server to remeber little something about you
// -this is like already logged into you emal, you stay logged in even if you pc is off, ect...
// http hearder tucked inside the virtual envelop providing hints to how the browser and serve should interoperate(work together)
// Comes in 'cookies' pieces of data or files planted on your computer that help them remember that you've been there before
// -ex even if not logging in your given big random number that become your unique identifire has been seen before
// --this way can track your begavior Set-Cookie: session=value
// ---And browsers are designed to send that cookie back to every page you visit/whatever server your on

// in incognito mode all cookies get thrown out aka are stateless 

// new file we'll need is a requirment.txt:
// from flask import Flask, redirect, render_template, request, session  *new import session
// from flask_session import Session

// app = Flask(__name__)
// app.config["SESSION_PERMANENT"] = False      *specific only to the libary flask_session and makes possible cookies(handstanps)
// app.config["SESSION_TYPE"] = "filesystem"    *
// Session(app)


// @app.route("/")
// def index():
//  if not session.get("name"):         *here checking if a name exist (if no name go to log in else go to index )
//         return redirect("/login")
//      return render_template("index.html")
// -----we create template for index page/home option to log in 


// @app.route("/login", methods = ["GET", "POST"])    *log in route / have to use get to render login op page and post to go to logged in page without leaking info
//  if request.method == "POST":
//          session["name"] = request.form.get("name")    *session[name] is the user locker where we can store var and thier values
//          return redirect("/")
//       return render_template("login.html")
// -----we create template for the login page form ect...


// @app.route("/logout")        *logout route
// def logout():
// session["name"] = None       *to log out changes the name value to none in py=null pretty much meaning now dosent exist
// return redirect("/")


// with session is like your own little locker where you not only get unique identifire but also place wher we can store things
// -in this case var and thier values specific to your unique session (tied to the unique user each its only session and session values)

// the tamplate to be rendered:
// {% extends "layout.html" %}      *classic use of the templae

// {% block body %}         *block to know what to pass into template

// {% if session.name %}        *conditional so can decide what will be passed into the block / checks if name exist
// You are logged in as { { session.name } }.<a href="/logout">Log out</a>.         *when exist displays name and op for logout
// {% else %}   
// You are not logged in. < a href = "/login" > Log in</a >.        *when not exist tell not loged in and give op to do so
//     {% endif %}

// {% endblock %}

// NOte - that doing logic sort of twice checking in session.name exist this is becuase instead of coding py to send to 2 diff pages
// -we instead are using the same html file tamplate but using the conditional to decide what will actually be displayed
// depending how you the cookie is made can time out after min day ect.. or last forever however the are made to be 
// the remember me like the log in or setting set for your account can be permenate cookies set  


// MVC - model(technique,techknolege, ect...), controller(the logic, serverside code), view(what the user sees)
// this case not actually sure here but others cotroller is python in this ex, and .html and template are our view


// conbining the front end with back end (here is the python with javascript)

// More examples:
// @app.route("/")
// def index():
// return render_template("index.html")

// @app.route("/search")
// def search():
// shows = db.execute("SELECT * FROM shows WHERE title LIKE ?", "%" + request.args.get("q") + "%")
// return render_template("search.html", shows = shows)
// -----here have our route and then search route pulling all value from the shows keys that's like placeholder
// ---- ?, then % on either end sql sytax allowing for other character on either end of q=q aka the user inputed value into form

// jsonify flask inport (js object notation)
// this import takes a python dict or list and converts it to json format:

// return jsonify(shows)
// -----added to end of above search route

// have our back end return a json array of serch result and let the browser convert it to html
// -and add nodes to our html aka manipulating the DOM now (got rid of the templates only kept the index.html)
// --using link script of jquery imported in the index html link


// <script crossorigin="anonymous" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
//     <script>

//         let input = document.querySelector('input');         *creat var that represent the input tag itself
//         input.addEventListener('keyup', function() {         *note shows in below funtion beign passed in could have been named anything
//             $.get('/search?q=' + input.value, function(shows) {      *here the string + input value is being passed in as argument to the jquery function
//               let html = '';                 *then here 2nd argument to jq function is another function passing in shows aka key representing all the show in file
//               for (let id in shows)         *in the passed function setting html to enmpty string[why?] 
//               {                               *and after var a for in loop pulling the id's iteration over the shows object
//                   let title = shows[id].title;       *then set var to shows[id] basically the  key then .title aka the title/value
//                   html += '<li>' + title + '</li>';      *then takes var previouly set and += string concat of <li> title returned</li>
//               }                                           *thus seems like creatng the html code needed to creat li for each item returned

//               document.querySelector('ul').innerHTML = html;     *then here grabing that ul and setting its inner html to be all the collected li's from the loop
//             });                                              *note the var named html could have been names anything 
//         });  

//     </script>
// -----when this the shows argument it recieves the json format dict or list that was converted


// google what is jquery? really type of language ect.. use how works with js and py ect...   /     what is ajax and rjax think:
// in js $.get is the same a writing JQuery.get     / the $ also referce to whats called an AJAX call - referce to making additional http request progmaticaly to a server(on its own? like auto fill for address its pulling all address the exist ect...)
// callback functin is a functin that only is clled once the input or answer is recieved / callthis function once you have the answer


// NOTE: seem this produces same result as what we did in begining useing py and html but now using dif way to get there instead 
// -still with the py datastructure but having it converted to json format and using still js for dom but also jquery in the html to pull value from the json convert structure now
// -- so not sure is this better worst is it replacing the sql or/if where are we storing the data seem still some way would have to ge stored somewhere else just server as global
// ---review this  (seems we are still needing flask for the backend)
// --research web and app set up like the conbinatin they use as model controller view ect... must be different meshes of languages and technologies
// --like here we used py, flask, json, html , js, css (some come package like DOM, but json, py, flask ect...)



// NOTE: also when using any other libary, language, functionality we typically will refrence either a link or import of that

// -------------------------------------------------------------------------------------------------------------------------------------
// Lecture 10 - Ethics 

// where you end up in relative to yourself better then started right(improve upon your programmin skills and understanding)
// what matters most is the fundametal, understanding, ideal that build the foundation of computer science
// -critical thinking and problem solving (less important is the specidied tech used)
// correctiness, design, style (AKA does your code work, is it designed for the problem, keep clean and effietive and clear)
// abstraction - complicated to simple and build on them (hgihlevel)
// precision - make very clear your communication and account for the corner cases and unexpected (weeds)
// side on social media how to protect people from believing bs on them is true(reliability score)

// get use to reading documentaion

// tools+: git, vscode, netlify, heroku, staying updated reddit stack crunch ycombinatio



// trie dtatstructure efficient but great memory used 
// DONZO now onto all the labs bruv ------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------



// Random note/comments on recursion
// my understanding is recursion is when a function calls itsself withing the funtion again itself
// -can be bit cunfusing however not so much once you understand whats actually happening
// --reccursion is very powerful and usefull (how and where dont know just yet but functinos forsure)]

// EX.

let factN = 5;

var math = {                                            // var structure as an object containing its key and value
    factorial:                                          // Declare the factorial property/key with the function as its value)
        function factorial(n) {                         // Declare the function as the property/key value
            if (n > 1) {                                // if statement param
                return n * factorial(n - 1);            // *here is where it begins: in this we still return a value beign the inital value 5 now times the function called with but 5-1 or 4 
            }                                           // *(Important to note that something is still being returned on each return of the function call/ the values for this example stack)
            // Returns 1 if n <= 1                      // just return 1 if dosent meet above
            return 1;                                   // 
        }                                               //
};                                                      //
// -----note we use 1 so it takes the stacked values at end gets multiplied by 1 aka return same # as if was just returned nothing changed
// console.log(math.factorial(factN));

// returns 120 so how did the number 5 turn into 120
// -----walking through the function so 5 is greater then 1 so we move to the return which equals '5 * factorial(n - 1)'  which basically is '5 * sameFunction(4)
// ----now the return it self '5 * sameFunction(4)' makes the function to be run again so again ran but with diff value now beign    '4 * factorial(n - 1)'  and so forth will continue till we are no longer meeting param aka once we decrement to #1
// ---now the actual looping is simple just runing and decrementing argument value till not ment but all the while a series of returned value are well being return
// --with each call and return can think of it like a stacking of return value (have 5 * then 4 * then 3 * then 2 * then last returned by not meeitng param is 1)
// -these return values still have their operation to process so we end up with (5 * 4 = 20/ 20 * 3 = 60/ 60 * 2 = 120/ 120 * 1 = 120)  and that how the recursion resulted in the end value of 120 
// in order the n and operation was done upon every return and sort of stored that value (almost like if was 'let return += returned value') and that contined till end of function
//get basic ideal and point across but definately sipler way to disply i bet lol but enough for me to have figured that out and understand basic idea


// -------------------------------------------------------------------------------------------------
// other example:
let fibN = 11;
var fib = function fibonacci(n) {
    if (n > 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else if (n < 1) {
        return 0;
    }
    // else, return 1
    return 1;
}

// console.log(fib(fibN));







// -------------------------------------------------------------------------------------------------
// lat n and k = 4
// class Solution {
//     // Multiply 'n' by 'k' using addition:
//     private static int nTimesK(int n, int k) {
//         // Print current value of n
//         System.out.println("n: " + n);

//         // Recursive Case
//         if (n > 1) {
//             return k + nTimesK(n - 1, k);
//         }
//         // Base Case n = 1
//         else {
//             return k;
//         }
//     }

// 4 + function (3, k)           [+]              4 + function (2, k)                [+]              4 + function (1, k)   +
    // 4(original k) + 4(result on function (3, k) nitice the k value never changed in this case only n aka the counter which had no effect on the value of k only on the number of time i would not meet the base case aka # times it would loop) + 4 + 4

// -----so seems very simlilar which is right to just simle itereation and loops just done a different way (for specified design, style, case ect... one a counter other value working with)





//  NOTE: in 2 exaple in one we return 1 in the base case and the other we return the value wanted note also in these cases
    // --that the quantity of arguments passed in is different  the case where we return 1 as base only contains 1 (aka the value want to return, that also used as counter)
    // ----vs in the case with 2 arguments we return only the value wanted and the 2nd parameter is only used as a counter and nothing else

















































































































































// let start = prompt('start #?');
// let end = prompt('end #?');
// let years;
// let populations = funtion() {

// }