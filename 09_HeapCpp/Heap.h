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
		int size = 0;
		int capacity = 100;
		T array[100];

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

}

template <typename T>
Heap<T>::~Heap(){

}

template <typename T>
int Heap<T>::getSize() const{

}

template <typename T>
void Heap<T>::insert(T value){

}

template <typename T>
T Heap<T>::extract(){

}

template <typename T>
void resize(){

}
