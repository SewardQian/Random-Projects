#ifndef _heap_h
#define _heap_h

	#include <iostream>
	#include <string>
	using namespace std;

	template <typename T>
	class Heap{
	public:
		Heap();
		~Heap();

		int getSize() const;
		void insert(T value);
		T extract();


		friend ostream& operator<<(ostream& out,const Heap<T> heap);

	private:
		int size;
		int capacity;
		T* array;
		int up(int origin) const;
		int down(int origin) const;

		void resize();

		
	};

	template <typename T>
	ostream& operator<<(ostream& out,const Heap<T> heap);

#endif

#include <iostream>
#include <string>
using namespace std;

template <typename T>
Heap<T>::Heap(){
	size = 0;
	capacity = 100;
	array = malloc(capacity*sizeof(T));
}

template <typename T>
Heap<T>::~Heap(){
	free(array);
}

template <typename T>
int Heap<T>::getSize() const{
	return size;
}

template <typename T>
void Heap<T>::insert(T value){
	resize();
	int current = size;
	
	size++;
	//TO DO
	//
	

}

template <typename T>
T Heap<T>::extract(){
	T returnValue = array[0];
	//TO DO

	return returnValue;
}

template <typename T>
void Heap<T>::resize(){
	if (capacity>=size){
		T* newArray = malloc(2*capacity*sizeof(T));
		for (int i = 0; i < capacity; i++){
			newArray[i] = array[i];
		}
		capacity*=2;
		free(array);
		array = newArray;
	}
}

template <typename T>
int Heap<T>::up(int origin) const{
	return (int) (origin-1)/2;
}

template <typename T>
int Heap<T>::down(int origin) const{
	return origin*2;
}

template <typename T>
ostream& operator<<(ostream& out,const Heap<T> heap){
	int lastIndex = Heap<T>::size - 1;
	out<<"["
	for (int i = 0; i < Heap<T>::size; i++){
		out<<Heap<T>::array[i];
		if (i!=lastIndex){
			out<<",";
		}
	}
	out<<"]";
}