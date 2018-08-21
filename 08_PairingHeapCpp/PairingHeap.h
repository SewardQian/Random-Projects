#ifndef _pairingHeap_h
#define _pairingHeap_h

#include <iostream>
#include <string>
using namespace std;

template <typename T>
struct heapNode{
	T data;
	heapNode* left;
	heapNode* right;

	heapNode(T d, heapNode* l = NULL, heapNode* r = NULL){
		data = d;
		left = l;
		right = r;
	}
};

template <typename T>
class PairingHeap{
public:
	PairingHeap();
	~PairingHeap();

	T findMin() const;
	void findMin();
	void insert(T x);
	void meld(PairingHeap<T> h2);
	void decreaseKey(T delta,T x);
	void del(T x);


private:

	heapNode<T>* root;

};

#endif


#include <iostream>
#include <string>
using namespace std;


template <typename T>
void findMin(){

}

template <typename T>
void insert(T x){

}

template <typename T>
void meld(PairingHeap<T> h2){

}

template <typename T>
void decreaseKey(T delta,T x){

}

template <typename T>
void del(T x){
	
}





