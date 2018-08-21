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
	void insert();
	void meld();
	void decreaseKey();
	void del();


private:

	heapNode<T>* root;

};

#endif


#include <iostream>
#include <string>
using namespace std;





