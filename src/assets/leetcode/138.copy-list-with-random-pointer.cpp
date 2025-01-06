/*

// Definition for a Node.

class Node {

public:

    int val;

    Node* next;

    Node* random;

    

    Node(int _val) {

        val = _val;

        next = NULL;

        random = NULL;

    }

};

*/



class Solution {

public:

    Node* copyRandomList(Node* head) {

        if (!head) return nullptr;

        

        unordered_map<Node*, Node*> old_to_new;

        Node* node = head;

        while(node)

        {

            Node* newNode = new Node(node->val);

            old_to_new[node] = newNode;

            node = node->next; 

        }

        node = head;

        while (node)

        {

            old_to_new[node]->next = old_to_new[node->next];

            old_to_new[node]->random = old_to_new[node->random];

            node = node->next;

        }

        return old_to_new[head];

    }

};